import { TodoEditProps } from './TodoEdit.props';
import styles from './TodoEdit.module.scss';

export const TodoEdit = ({ todo, onСhangeStatus }: TodoEditProps) => {
  if (!!todo) {
    const { text, status, complited, id } = todo;
    return (
      <div className={styles.edit}>
        <div className={styles.todo}>
          <p>{text}</p>
          <span>{status}</span>
          <input type='checkbox' checked={complited} />
        </div>
      </div>
    );
  } else {
    return <div>А тут ничего нет </div>;
  }
};
