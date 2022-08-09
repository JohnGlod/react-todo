import { ITodo } from "../../model/ITodo";

export interface TodoListProps {
  todoList: ITodo[],
  onEditTodo: (todo: ITodo) => void;
}