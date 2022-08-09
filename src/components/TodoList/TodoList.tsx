import { ITodo } from '../../model/ITodo';

import { TodoItem } from '../TodoItem';

import { TodoListProps } from './TodoList.props';
import styles from './TodoList.module.scss';

export const TodoList = ({ todoList, onEditTodo }: TodoListProps) => {
  return (
    <ul className={styles.list}>
      {!!todoList &&
        todoList?.map(({ id, text, status, complited }: ITodo) => {
          return (
            <li
              key={id}
              onClick={() => onEditTodo({ id, text, status, complited })}
            >
              <TodoItem
                id={id}
                text={text}
                status={status}
                complited={complited}
              />
            </li>
          );
        })}
    </ul>
  );
};
