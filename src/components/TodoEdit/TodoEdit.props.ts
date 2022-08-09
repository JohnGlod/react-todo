import { EStatus } from "../../model/EStatus";
import { ITodo } from "../../model/ITodo";

export interface TodoEditProps {
  todo: ITodo | null;
  onСhangeStatus: (id:number, status: EStatus) => void;
}