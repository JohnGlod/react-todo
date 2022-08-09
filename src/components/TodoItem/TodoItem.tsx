import React from 'react';
import { ITodo } from '../../model/ITodo';


import styles from './TodoItem.module.scss';

export const TodoItem = (props: ITodo) => {
  const { text, status, complited } = props;

  return (
    <div className={styles.todo}>
      <p>{text}</p>
      <span>{status}</span>
      <input type='checkbox' checked={complited} />
    </div>
  );
};
