import { Model } from "mongoose";

export const findWithPaginate = async <T>(
  model: Model<T>,
  page: number,
  limit: number,
  filter: Record<string, any> = {}
): Promise<{
  data: T[];
  pagination: {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    limit: number;
  };
}> => {
  if (page <= 0 || limit <= 0) {
    throw new Error("Page and limit must be positive numbers.");
  }

  const skip = (page - 1) * limit;

  const result = await model.aggregate([
    { $match: filter },
    { $skip: skip },
    { $limit: limit },
    {
      $group: { _id: null, totalItems: { $sum: 1 }, data: { $push: "$$ROOT" } },
    },
  ]);

  const totalItems = result.length > 0 ? result[0].totalItems : 0;
  const data = result.length > 0 ? result[0].data : [];
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
};

export const find = async <T>(
  model: Model<T>,
  filter: Record<string, any> = {}
): Promise<{
  data: T[];
}> => {
  const result = await model.aggregate([
    { $match: filter },
    { $limit: 1000 }, // Consider limiting the result set to avoid memory overhead
  ]);
  return { data: result };
};
