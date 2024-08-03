import { httpClient } from './http';
import { Book, BookDetail } from '../models/book.model';
import { Pagination } from '../models/pagination.model';

interface FetchBooksProps {
	category_id?: number;
	news?: boolean;
	currentPage?: number;
	limit: number;
}

interface FetchBooksResponseProps {
	books: Book[];
	pagination: Pagination;
}

export const fetchBooks = async (params: FetchBooksProps) => {
	try {
		const response = await httpClient.get<FetchBooksResponseProps>('/books', {
			params,
		});
		return response.data;
	} catch (error) {
		return {
			books: [],
			pagination: {
				totalCount: 0,
				currentPage: 1,
			},
		};
	}
};

export const fetchBook = async (bookId: string) => {
	try {
		const response = await httpClient.get<BookDetail>(`/books/${bookId}`);
		return response.data;
	} catch (error) {}
};
