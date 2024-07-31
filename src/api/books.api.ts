import { httpClient } from './http';
import { Book } from '../models/book.model';
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
			params: params,
		});
		return response.data;
	} catch (error) {
		console.log(1);
		return {
			books: [],
			pagination: {
				totalCount: 0,
				currentPage: 1,
			},
		};
	}
};
