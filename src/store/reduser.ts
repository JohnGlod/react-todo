import { EActions } from '../model/EActions';
import { IAction } from '../model/IAction';
import { IState } from '../model/IState';
import { EStatus } from '../model/EStatus';

export const TodoReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case EActions.ADD:
      return { ...state, todoList: [...state.todoList, action.payload] };
    case EActions.ACTIVE:
      return { ...state, activeTodo: action.payload };
    case EActions.REMOVE:
      return {
        ...state,
        activeTodo: null,
        todoList: [...state.todoList.filter((task) => task !== action.payload)],
      };
    case EActions.NAME:
      if (state.activeTodo) {
        const active = { ...state.activeTodo, name: action.payload };

        return {
          ...state,
          activeTodo: active,
          todoList: [
            ...state.todoList.map((todo) => {
              if (todo.id === active.id) {
                return active;
              }
              return todo;
            }),
          ],
        };
      }
      return state;

    case EActions.TEXT:
      if (state.activeTodo) {
        const active = { ...state.activeTodo, text: action.payload };

        return {
          ...state,
          activeTodo: active,
          todoList: [
            ...state.todoList.map((todo) => {
              if (todo.id === active.id) {
                return active;
              }
              return todo;
            }),
          ],
        };
      }
      return state;
    case EActions.STATUS:
      if (state.activeTodo) {
        const active = {
          ...state.activeTodo,
          status: action.payload as EStatus,
        };
        return {
          ...state,
          activeTodo: active,
          todoList: [
            ...state.todoList.map((todo) => {
              if (todo.id === active.id) {
                return active;
              }
              return todo;
            }),
          ],
        };
      }

      return state;
    case EActions.CHECKED:
      return {
        ...state,
        todoList: [
          ...state.todoList.map((todo) => {
            if (todo.id === action.payload.id) {
              const toggleTodo = !todo.complited ? true : false;

              return { ...action.payload, complited: toggleTodo };
            }
            return todo;
          }),
        ],
      };
    default:
      return state;
  }
};
