import { useContext } from 'react';

import { TodoContext } from '../../store/store';

import { ITodo } from '../../model/ITodo';
import { EActions } from '../../model/EActions';

import { TodoItem } from '../TodoItem';

import styles from './TodoList.module.scss';

export const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);
  return (
    <ul className={styles.list}>
      {!!state?.todoList &&
        state.todoList?.map((todo: ITodo, id) => {
          return (
            <TodoItem
              key={id}
              todo={todo}
              onClick={() =>
                dispatch && dispatch({ type: EActions.ACTIVE, payload: todo })
              }
            />
          );
        })}
    </ul>
  );
};
