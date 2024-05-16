import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../App.module.css';

export const TodoItem = ({ todo, editableTodoId, startEdit, setEditedTodoText, editedTodoText, showButtons, deleteTodo, saveEdit }) => {
	const [isEditing, setIsEditing] = useState(false);
	const truncatedText = todo.text.length > 10 ? `${todo.text.slice(0, 10)}...` : todo.text;

	const handleEdit = () => {
		startEdit(todo.id, todo.text);
		setIsEditing(true);
	};

	const handleSave = () => {
		saveEdit();
		setIsEditing(false);
	};

	const handleCancel = () => {
		startEdit(null, '');
		setIsEditing(false);
	};

	return (
		<li key={todo.id}>
			{isEditing ? (
				<>
					<input type="text" value={editedTodoText} onChange={(event) => setEditedTodoText(event.target.value)} className={styles.inputField} />
					{showButtons && (
						<>
							<button onClick={handleSave} className={styles.showButton}>
								Сохранить
							</button>
							<button onClick={handleCancel} className={styles.showButton}>
								Отмена
							</button>
						</>
					)}
				</>
			) : (
				<>
					<Link to={`/task/${todo.id}`} title={todo.text}>
						{truncatedText}
					</Link>
					{showButtons && (
						<>
							<button onClick={handleEdit} className={styles.showButton}>
								Изменить
							</button>
							<button onClick={() => deleteTodo(todo.id)} className={styles.showButton}>
								Удалить
							</button>
						</>
					)}
				</>
			)}
		</li>
	);
};
