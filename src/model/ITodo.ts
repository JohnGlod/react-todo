import { EStatus } from "./EStatus";

export interface ITodo {
  id: string;
  name: string;
  text: string;
  complited: boolean;
  status: EStatus;
}
