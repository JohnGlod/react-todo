import { createContext } from 'react';
import { IContext } from '../model/IContext';
import { IState } from '../model/IState';

export const initialState: IState = {
  todoList: [],
  activeTodo: null,
};

export const TodoContext = createContext<Partial<IContext>>({});
