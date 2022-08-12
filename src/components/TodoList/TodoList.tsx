import { TodoItem } from '../TodoItem';

import { TodoListProps } from './TodoList.props';

import styles from './TodoList.module.scss';

export const TodoList = ({ todos }: TodoListProps) => (
  <ul className={styles.list}>
    {!!todos && todos?.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
  </ul>
);
