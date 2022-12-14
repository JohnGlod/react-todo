import React, { useReducer, useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import { TodoReducer } from '../../store/reduser';
import { initialState, TodoContext } from '../../store/store';

import { TodoList } from '../TodoList';
import { TodoEdit } from '../TodoEdit';
import { NewTodo } from '../NewTodo';

import { ITodo } from '../../model/ITodo';
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

  const ref = useRef<HTMLDivElement | null>(null);
  const refRight = useRef<HTMLDivElement | null>(null);

  const [search, setSearch] = useState<string>('');
  const [result, setResult] = useState<ITodo[] | undefined>(undefined);

  const handleSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredName = event.target.value;
    setSearch(enteredName);
  };

  const searchTodos = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event?.key === 'Enter') {
      const foundItems = state.todoList.filter((item: ITodo) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setResult(foundItems);
    }
  };

  useEffect(() => {
    const resizeableElem = ref.current as HTMLDivElement;

    /* Получили все стили элемента после рендера */
    const styles = window.getComputedStyle(resizeableElem);

    let width = parseInt(styles.width, 10);
    let x: number = 0;

    const onMouseMoveRightResize = (event: MouseEvent) => {
      const dx = event.clientX - x; // получаем координаты клика
      x = event.clientX; // обновляем X на актуальное значение

      /*  обновляем ширину элемента */
      width = width + dx;
      resizeableElem.style.width = `${width}px`;
    };

    const onMouseUpRightResize = (event: MouseEvent) => {
      /* отписываемся от события */
      document.removeEventListener('mousemove', onMouseMoveRightResize);
    };

    const onMouseDownRightResize = (event: MouseEvent) => {
      x = event.clientX;
      resizeableElem.style.left = styles.left;

      resizeableElem.style.right = null!;

      document.addEventListener('mousemove', onMouseMoveRightResize);
      document.addEventListener('mouseup', onMouseUpRightResize);
    };

    /* Добавим Event Listener на событие 'mouseDown' */

    const resizeRight = refRight.current;
    resizeRight?.addEventListener('mousedown', onMouseDownRightResize);

    return () => {
      /* отписываемся от события */
      resizeRight?.removeEventListener('mousedown', onMouseDownRightResize);
    };
  }, []);

  return (
    <main className={styles.app}>
      <h1>My TodoList</h1>
      <TodoContext.Provider value={ContextState}>
        <div className={styles.container}>
          <div className={cn(styles.TodoList, styles.resizeable)} ref={ref}>
            <div className={styles.resizeableRight} ref={refRight} />
            <input
              className={styles.search}
              type='search'
              name='search'
              onChange={handleSearchValue}
              placeholder='Найти todo'
              onKeyDown={searchTodos}
              id='search'
            />
            <TodoList todos={!!result ? result : state.todoList} />
            <NewTodo />
          </div>
          <TodoEdit />
        </div>
      </TodoContext.Provider>
    </main>
  );
}

export default App;
