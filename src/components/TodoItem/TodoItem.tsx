import React, { useContext } from 'react';
import cn from 'classnames';

import { TodoContext } from '../../store/store';

import { EStatus } from '../../model/EStatus';
import { EActions } from '../../model/EActions';

import { TodoItemProps } from './TodoItem.props';

import styles from './TodoItem.module.scss';

export const TodoItem = ({ todo, edit = false }: TodoItemProps) => {
  const { text, status, complited, name } = todo;
  const { state, dispatch } = useContext(TodoContext);

  const handleRemoveTodo = () => {
    if (dispatch) {
      dispatch({ type: EActions.REMOVE, payload: todo });
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (dispatch) {
      const name = event.target.name;

      switch (name) {
        case 'status':
          dispatch({ type: EActions.STATUS, payload: event.target.value });
          break;
        case 'name':
          dispatch({ type: EActions.NAME, payload: event.target.value });
          break;
        case 'checkbox':
          dispatch({ type: EActions.CHECKED, payload: todo });
          dispatch({ type: EActions.ACTIVE, payload: null });
          break;
        case 'text':
          dispatch({ type: EActions.TEXT, payload: event.target.value });
          break;
      }
    }
  };
  
  return (
    <li
      className={styles.todo}
      onClick={
        !edit
          ? () => {
              dispatch && dispatch({ type: EActions.ACTIVE, payload: todo });
            }
          : () => {}
      }
    >
      {edit && (
        <div className='checkbox'>
          <label htmlFor='checkbox' className={styles.label}>
            <input
              className={styles.checkbox}
              name='checkbox'
              type='checkbox'
              checked={complited}
              onChange={handleInputChange}
            />
          </label>
        </div>
      )}
      <div className={styles.text}>
        <input
          className={styles.name}
          type='text'
          name='name'
          onChange={handleInputChange}
          value={name}
          disabled={!edit}
        />
        <input
          className={styles.text}
          type='text'
          name='text'
          onChange={handleInputChange}
          value={text}
          disabled={!edit}
        />
      </div>

      <select
        className={cn(
          styles.select,
          !edit ? styles.hidden : styles.active,
          EStatus.During === todo.status ? styles.blue : '',
          EStatus.Finished === todo.status ? styles.green : '',
          EStatus.Load === todo.status ? styles.gray : ''
        )}
        disabled={!edit ? true : false}
        value={status}
        name='status'
        onChange={handleInputChange}
      >
        <option value={EStatus.Load}>{EStatus.Load}</option>
        <option value={EStatus.During}>{EStatus.During}</option>
        <option value={EStatus.Finished}>{EStatus.Finished}</option>
      </select>
      <button className={styles.remove} onClick={handleRemoveTodo}>
        X
      </button>
    </li>
  );
};
