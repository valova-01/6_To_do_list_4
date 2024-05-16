import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../App.module.css';

export const NotFoundPage = () => {
	return (
		<div className={styles.errorPage}>
			<h2>Ошибка 404: Страница не найдена</h2>
			<p className={styles.linkContainer}>
				Вернуться на{' '}
				<Link to="/" className={styles.link}>
					Главную страницу
				</Link>
			</p>
		</div>
	);
};
