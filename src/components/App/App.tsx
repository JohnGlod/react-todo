import React, { useReducer } from 'react';

import { TodoReducer } from '../../store/reduser';
import { initialState, TodoContext } from '../../store/store';

import { TodoList } from '../TodoList';
import { TodoEdit } from '../TodoEdit';
import { NewTodo } from '../NewTodo';

import { IContext } from '../../model/IContext';
import { IState } from '../../model/IState';
import { IAction } from '../../model/IAction';

import styles from './App.module.scss';


function App() {
  const [state, dispatch] = useReducer<React.Reducer<IState, IAction>>(
    TodoReducer,
    initialState
  );
  const ContextState: IContext = {
    state,
    dispatch,
  };
  console.log(state)
  return (
    <main className={styles.app}>
      <h1>My TodoList</h1>
      <TodoContext.Provider value={ContextState}>
        <div className={styles.container}>
          <div className={styles.TodoList}>
            <TodoList />
            <NewTodo />
          </div>
          <TodoEdit />
        </div>
      </TodoContext.Provider>
    </main>
  );
}

export default App;
