import { BaseRs } from "../baseRs";

export interface GetMasterConfigRs extends BaseRs {
  data: Data;
}

export interface Data {
  masterConfigs: MasterConfig[];
}

export interface MasterConfig {
  key: string;
  name: string;
  value: string;
  status: string;
}
