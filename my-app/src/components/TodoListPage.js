import { useState, useEffect } from 'react';
import { useNavigate, useMatch } from 'react-router-dom';
import styles from '../App.module.css';
import { TodoItem } from './TodoItem';
import { NotFoundPage } from './NotFoundPage';

export const TaskPage = ({ todos, startEdit, saveEdit, deleteTodo, setEditedTodoText }) => {
	const navigate = useNavigate();
	const match = useMatch('/task/:taskId');
	const taskId = match?.params.taskId;
	const [todo, setTodo] = useState(null);
	const [loading, setLoading] = useState(true);

	const goBack = () => {
		navigate('/');
	};

	useEffect(() => {
		if (!taskId) {
			return;
		}

		setLoading(true);

		fetch(`http://localhost:3005/todos/${taskId}`)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Задача не найдена');
				}
				return response.json();
			})
			.then((data) => {
				setTodo(data);
			})
			.catch((error) => {
				console.error(error);
				setTodo(null);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [taskId, todos, setTodo]);

	if (loading) {
		return null;
	}

	if (!todo) {
		return <NotFoundPage />;
	}

	return (
		<div>
			<button onClick={goBack} className={styles.backButton}>
				Назад
			</button>
			<h2>{todo.text}</h2>
			<TodoItem
				todo={todo}
				showButtons={true}
				startEdit={() => startEdit(todo.id, todo.text)}
				saveEdit={saveEdit}
				deleteTodo={deleteTodo}
				setEditedTodoText={(text) => setEditedTodoText(text)}
			/>
		</div>
	);
};
