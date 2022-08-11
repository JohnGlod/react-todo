import { useContext } from 'react';

import { TodoContext } from '../../store/store';

import { TodoItem } from '../TodoItem';

import styles from './TodoEdit.module.scss';

export const TodoEdit = () => {
  const { state, dispatch } = useContext(TodoContext);
  return (
    <div className={styles.edit}>
      <ul className={styles.list}>
        {!!state?.activeTodo ? (
          <TodoItem key={state.activeTodo?.id} todo={state.activeTodo} edit />
        ) : (
          <li className={styles.placeholder}>Задач не выбрано...</li>
        )}
      </ul>
    </div>
  );
};
