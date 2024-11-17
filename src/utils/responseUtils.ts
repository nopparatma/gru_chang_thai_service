import { StatusCode, ResponseStatusDetails } from "../constants/constant";
import { Pagination } from "../models/rqrs/baseRs";

export const createResponse = (
  statusCode: StatusCode,
  data: any,
  pagination?: Pagination
) => {
  const { httpStatusCode, message } = ResponseStatusDetails[statusCode];

  return {
    rs: {
      status: {
        code: statusCode,
        message: message,
      },
      data,
      pagination,
    },
    httpStatusCode,
  };
};
