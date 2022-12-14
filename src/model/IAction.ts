import { EActions } from './EActions';
import { ITodo } from './ITodo';
interface ActionStringPayload {
  type: EActions.STATUS | EActions.TEXT | EActions.NAME;
  payload: string;
}

interface ActionObjectPayload {
  type: EActions.REMOVE | EActions.CHECKED | EActions.ADD;
  payload: ITodo;
}

interface ActionActiveTodoPayload {
  type: EActions.ACTIVE;
  payload: ITodo | null;
}

export type IAction =
  | ActionStringPayload
  | ActionObjectPayload
  | ActionActiveTodoPayload;
