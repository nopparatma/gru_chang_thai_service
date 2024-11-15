import { Request, Response } from "express";
import { MasterConfig } from "../models/masterConfig/masterConfig";
import { paginate } from "../utils/paginationUtils";
import { StatusCode } from "../constants/constant";
import { createResponse } from "../utils/responseUtils";
import { IMasterConfig } from "../models/masterConfig/IMasterConfig";

export const getMasterConfig = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { page = 1, limit = 10 } = req.body;

    const { data = [], pagination } = await paginate(
      MasterConfig,
      page,
      limit
    );

    const masterConfigs: IMasterConfig[] = data.map((element) => ({
      key: element.KEY,
      name: element.NAME,
      data: element.DATA,
      status: element.STATUS,
    }));

    const response = createResponse(
      StatusCode.SUCCESS,
      { masterConfigs },
      pagination
    );

    res.status(response.httpStatusCode).json(response.rs);
  } catch (error) {
    res.status(500).send("Server error");
  }
};
