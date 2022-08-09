import { EStatus } from "./EStatus";

export interface ITodo {
  id: number;
  text: string;
  complited: boolean;
  status: EStatus;
}
