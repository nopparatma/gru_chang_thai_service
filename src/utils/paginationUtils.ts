import { Model } from "mongoose";

export const paginate = async <T>(
  model: Model<T>,
  page: number,
  limit: number,
  filter: Record<string, any> = {}
): Promise<{
  data: any[];
  pagination: {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    limit: number;
  };
}> => {
  try {
    // Validate the page and limit inputs for safety
    if (page <= 0 || limit <= 0) {
      throw new Error("Page and limit must be positive numbers.");
    }

    const skip = (page - 1) * limit;

    // Use aggregation to combine count and find in one query for efficiency
    const aggregation = [
      { $match: filter }, // Apply the filter
      {
        $facet: {
          metadata: [{ $count: "totalItems" }], // Get total count of items
          data: [{ $skip: skip }, { $limit: limit }], // Paginated data
        },
      },
    ];

    const result = await model.aggregate(aggregation);

    // Safely extract totalItems and results, with defaults to handle missing data
    const totalItems = result[0]?.metadata?.[0]?.totalItems ?? 0; // Safely access totalItems
    const data = result[0]?.data ?? []; // Safely access paginated data

    // Calculate total pages, ensuring no division by zero
    const totalPages = totalItems > 0 ? Math.ceil(totalItems / limit) : 0;

    return {
      data,
      pagination: {
        totalItems,
        totalPages,
        currentPage: page,
        limit,
      },
    };
  } catch (error) {
    // Improved error handling with more context
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred.";
    throw new Error(`Error while paginating data: ${errorMessage}`);
  }
};
