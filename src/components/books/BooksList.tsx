import { useLocation } from 'react-router-dom';
import { Book } from '../../models/book.model';
import BookItem from './BookItem';
import { styled } from 'styled-components';
import { useEffect, useState } from 'react';
import { QUERYSTRING } from '../../constants/querystring';
import { ViewMode } from './BooksViewSwitcher';

// const dumyBook: Book = {
//   id: 1,
//   title: "Dummy",
//   img: 5,
//   category_id: 1,
//   form: "paperBack",
//   isbn: "Dummy Isbn",
//   summary: "summary",
//   detail: "detail",
//   author: "author",
//   pages: 100,
//   contents: "contents",
//   price: 100000,
//   likes: 3,
//   pubDate: "2023-01-01",
// };

interface Props {
	books: Book[];
}

export default function BooksList({ books }: Props) {
	const [view, setView] = useState<ViewMode>('grid');
	const location = useLocation();

	useEffect(() => {
		const params = new URLSearchParams(location.search);
		if (params.get(QUERYSTRING.VIEW)) {
			setView(params.get(QUERYSTRING.VIEW) as ViewMode);
		}
	}, [location.search]);
	return (
		<BooksListStyle view={view}>
			{books.map((item) => (
				<BookItem key={item.id} book={item} view={view} />
			))}
		</BooksListStyle>
	);
}

interface BookListStlyeProps {
	view: ViewMode;
}

const BooksListStyle = styled.div<BookListStlyeProps>`
	display: grid;
	grid-template-columns: ${({ view }) =>
		view === 'grid' ? 'repeat(4,1fr) ' : 'repeat(1,1fr)'};
	gap: 24px;
`;
