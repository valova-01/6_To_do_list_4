import styles from '../App.module.css';
import { TodoItem } from './TodoItem';

export const TodoList = ({ sortedTodos, startEdit, saveEdit, deleteTodo, setEditedTodoText, showButtons }) => {
	return (
		<ul className={styles.todoList}>
			{sortedTodos.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					showButtons={showButtons}
					startEdit={startEdit}
					saveEdit={saveEdit}
					deleteTodo={deleteTodo}
					setEditedTodoText={setEditedTodoText}
				/>
			))}
		</ul>
	);
};
