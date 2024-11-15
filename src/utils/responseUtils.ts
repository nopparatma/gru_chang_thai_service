import { StatusCode, ResponseStatusDetails } from "../constants/constant";

export const createResponse = (
  statusCode: StatusCode,
  data: any,
  pagination: any
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
