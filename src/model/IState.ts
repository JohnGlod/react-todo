import { ITodo } from './ITodo';

export interface IState {
  todoList: ITodo[] | [];
  activeTodo: ITodo | null;
}
