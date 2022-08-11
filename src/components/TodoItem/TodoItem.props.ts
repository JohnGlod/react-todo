import { ITodo } from '../../model/ITodo';

export interface TodoItemProps {
  todo: ITodo;
  edit?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}
