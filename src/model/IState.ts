import { ITodo } from './ITodo';

export interface IState {
  todoList: ITodo[] | [];
  newTodo: {name: string, text: string};
  activeTodo: ITodo | null;
}
