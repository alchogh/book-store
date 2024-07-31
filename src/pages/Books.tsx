import BooksEmpty from '../components/books/BooksEmpty';
import BooksFilter from '../components/books/BooksFilter';
import BooksList from '../components/books/BooksList';
import BooksViewSwitcher from '../components/books/BooksViewSwitcher';
import Pagination from '../components/books/Pagination';
import Title from '../components/common/Title';
import { useBooks } from '../hooks/useBooks';
import styled from 'styled-components';

export default function Books() {
	const { books, pagination } = useBooks();
	console.log(books);
	console.log(pagination);
	return (
		<>
			<Title size="large">도서 검색 결과</Title>
			<BookStyle>
				<BooksFilter />
				<BooksViewSwitcher />
				<BooksList books={books} />
				<BooksEmpty />
				<Pagination />
			</BookStyle>
			Books
		</>
	);
}

const BookStyle = styled.div``;
