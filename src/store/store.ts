import { createContext } from 'react';
import { EStatus } from '../model/EStatus';
import { IContext } from '../model/IContext';
import { IState } from '../model/IState';

export const initialState: IState = {
  todoList: [
    {
      id: 'df',
      name: 'Основной функционал',
      text: 'Реализовать добавление, редактирование и удаления заметок',
      status: EStatus.Finished,
      complited: true,
    },
    {
      id: 'dfd',
      name: 'Обрезать',
      text: 'Обрезать конец наименования заметки',
      status: EStatus.Load,
      complited: false,
    },
    {
      id: 'dfda',
      name: 'Индикация',
      text: 'Добавить цветовую индикацию',
      status: EStatus.Finished,
      complited: true,
    },
    {
      id: 'ddfd',
      name: 'Ресайз',
      text: 'Добавить ресайз левого списка',
      status: EStatus.Load,
      complited: false,
    },
  ],
  newTodo: { name: '', text: '' },
  activeTodo: null,
};

export const TodoContext = createContext<Partial<IContext>>({});
