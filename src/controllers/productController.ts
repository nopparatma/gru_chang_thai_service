import { Request, Response } from "express";
import { Product } from "../models/db/products/products";
import { findWithPaginate } from "../utils/databaseUtils";
import { GetProductRs } from "../models/rqrs/getProduct/getProductRs";
import { GetProductRq } from "../models/rqrs/getProduct/getProductRq";
import { IProducts } from "../models/db/products/IProducts";
import { ResponseStatusDetails, StatusCode } from "../constants/constant";
import { GetCategoriesRq } from "../models/rqrs/getCategories/getCategoriesRq";
import { ICategories } from "../models/db/categories/ICategories";
import { Categories } from "../models/db/categories/categories";
import { GetCategoriesRs } from "../models/rqrs/getCategories/getCategoriesRs";

export const getProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { categoryId, pagination: paginationRq } = req.body as GetProductRq;
    const { page = 1, limit = 10 } = paginationRq;

    const filter = { categoryId: categoryId };

    const { data = [], pagination } = await findWithPaginate<IProducts>(
      Product,
      page,
      limit,
      filter
    );

    const { httpStatusCode, message } =
      ResponseStatusDetails[StatusCode.SUCCESS];

    const result: GetProductRs = {
      data: {
        products: data.map(({ categoryId, image, sku, name, description }) => ({
          categoryId,
          image,
          sku,
          name,
          description,
        })),
      },
      status: {
        code: StatusCode.SUCCESS,
        message: message,
      },
      pagination: pagination,
    };

    res.status(httpStatusCode).json(result);
  } catch (error) {
    console.log(error);
    const { httpStatusCode, message } =
      ResponseStatusDetails[StatusCode.INTERNAL_SERVER_ERROR];
    res.status(httpStatusCode).send(message);
  }
};

export const getCategories = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { pagination: paginationRq } = req.body as GetCategoriesRq;
    const { page = 1, limit = 10 } = paginationRq;

    const { data = [], pagination } = await findWithPaginate<ICategories>(
      Categories,
      page,
      limit
    );

    const { httpStatusCode, message } =
      ResponseStatusDetails[StatusCode.SUCCESS];

    const result: GetCategoriesRs = {
      data: {
        categories: data.map(
          ({ categoryId, image, seq, name, description }) => ({
            categoryId,
            image,
            seq,
            name,
            description,
          })
        ),
      },
      status: {
        code: StatusCode.SUCCESS,
        message: message,
      },
      pagination: pagination,
    };

    res.status(httpStatusCode).json(result);
  } catch (error) {
    console.log(error);
    const { httpStatusCode, message } =
      ResponseStatusDetails[StatusCode.INTERNAL_SERVER_ERROR];
    res.status(httpStatusCode).send(message);
  }
};
