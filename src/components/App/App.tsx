import React, { useState } from 'react';
import { TodoList } from '../TodoList';
import { TodoEdit } from '../TodoEdit';
import styles from './App.module.scss';
import { ITodo } from '../../model/ITodo';
import { EStatus } from '../../model/EStatus';

function App() {
  const [todoList, setTodoList] = useState<ITodo[]>([
    {
      id: 1,
      text: 'Реализовать добавление, редактирование и удаления заметок',
      status: EStatus.Load,
      complited: false,
    },
    {
      id: 2,
      text: 'Реализовать добавление, редактирование и удаления заметок',
      status: EStatus.Load,
      complited: false,
    },
    {
      id: 3,
      text: 'Обрезать конец наименования заметки',
      status: EStatus.Load,
      complited: false,
    },
    {
      id: 4,
      text: 'Реализовать добавление, редактирование и удаления заметок',
      status: EStatus.Load,
      complited: false,
    },
    {
      id: 5,
      text: 'Реализовать добавление, редактирование и удаления заметок',
      status: EStatus.Load,
      complited: false,
    },
  ]);
  const [activeTodo, setActiveTodo] = useState<null | ITodo>(null);
  const onEditTodo = (todo: ITodo) => setActiveTodo(todo);

  const onСhangeStatus = (id: number, status: EStatus) => {
    const newTodos = todoList.map((item) => {
      if (item.id === id) {
        const newItem = { ...item };

        switch (status) {
          case 'during':
            newItem.status = EStatus.During;
            break;
          case 'finished':
            newItem.status = EStatus.Finished;
            break;
          default:
            newItem.status = EStatus.Load;
            break;
        }

        return newItem;
      }
      return item;
    });
    setTodoList(newTodos);
  };

  return (
    <main className={styles.container}>
      <TodoList todoList={todoList} onEditTodo={onEditTodo} />
      <TodoEdit onСhangeStatus={onСhangeStatus} todo={activeTodo} />
    </main>
  );
}

export default App;
