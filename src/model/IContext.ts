import { IAction } from './IAction';
import { IState } from './IState';

export interface IContext {
  state: IState;
  dispatch: React.Dispatch<IAction>;
}
