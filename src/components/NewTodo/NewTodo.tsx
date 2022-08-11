import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { TodoContext } from '../../store/store';
import { EActions } from '../../model/EActions';
import { EStatus } from '../../model/EStatus';

import styles from './NewTodo.module.scss';

export const NewTodo = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (text === '' && name === '') return;

    if (dispatch) {
      dispatch({
        type: EActions.ADD,
        payload: {
          name: name,
          complited: false,
          id: uuidv4(),
          status: EStatus.Load,
          text: text,
        },
      });
    }
    setName('');
    setText('');
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    if (name === 'name') {
      setName(event.target.value);
    } else {
      setText(event.target.value);
    }
  };

  return (
    <form
      className={styles.form}
      id='form'
      onSubmit={(event) => addTodo(event)}
    >
      <input
        type='text'
        name='name'
        placeholder='Имя задачи'
        value={name}
        autoComplete='off'
        onChange={(event) => handleInputChange(event)}
      />
      <input
        type='text'
        name='text'
        placeholder='Текст задачи'
        autoComplete='off'
        value={text}
        onChange={(event) => handleInputChange(event)}
      />

      <button type='submit'>Add a task</button>
    </form>
  );
};
