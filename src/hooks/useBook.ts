import { useEffect, useState } from 'react';
import { BookDetail } from '../models/book.model';
import { fetchBook, likeBook } from '../api/books.api';

export const useBook = (bookId: string | undefined) => {
	const [book, setBook] = useState<BookDetail | null>(null);

	const likeToggle = () => {
		if (!book) return;

		if (book.liked) {
			likeBook(book.category_id).then(() => {
				setBook({
					...book,
					liked: true,
					likes: book.likes + 1,
				});
			});
		}
	};

	const getBook = async () => {
		try {
			if (!bookId) return;

			const bookData = await fetchBook(bookId);
			if (bookData) {
				setBook(bookData);
			} else {
				console.warn('no book');
			}
		} catch (error) {
			console.error('Failed to fetch book:', error);
		}
	};

	useEffect(() => {
		if (bookId) {
			getBook();
		}
	}, [bookId]);

	return { book, likeToggle };
};
