import { Request, Response } from "express";
import { MasterConfig } from "../models/db/masterConfig/masterConfig";
import { find } from "../utils/databaseUtils";
import { ResponseStatusDetails, StatusCode } from "../constants/constant";
import { createResponse } from "../utils/responseUtils";
import { IMasterConfig } from "../models/db/masterConfig/IMasterConfig";

export const getMasterConfig = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { data = [] } = await find<IMasterConfig>(MasterConfig);

    const masterConfigs: IMasterConfig[] = data.map((element) => ({
      key: element.key,
      name: element.name,
      value: element.value,
      status: element.status,
    }));

    const { httpStatusCode, rs } = createResponse(StatusCode.SUCCESS, {
      masterConfigs,
    });

    res.status(httpStatusCode).json(rs);
  } catch (error) {
    const { httpStatusCode, message } =
      ResponseStatusDetails[StatusCode.INTERNAL_SERVER_ERROR];
    res.status(httpStatusCode).send(message);
  }
};
