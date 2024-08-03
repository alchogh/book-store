import React from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { useBook } from '../hooks/useBook';
import { getImgSrc } from '../utils/image';
import Title from '../components/common/Title';
import { BookDetail as IBookDetail } from '../models/book.model';
import { formatDate, formatNumber } from '../utils/format';
import { Link } from 'react-router-dom';
const bookInfoList = [
	{
		label: '카테고리',
		key: 'category_name',
		filter: (book: IBookDetail) => (
			<Link to={`/books?category_id=${book.category_id}`}>
				{book.category_name}
			</Link>
		),
	},
	{
		label: '포멧',
		key: 'form',
	},
	{
		label: '페이지',
		key: 'pages',
	},
	{
		label: 'ISBN',
		key: 'isbn',
	},
	{
		label: '출간일',
		key: 'pubDate',
		filter: (book: IBookDetail) => formatDate(book.pubDate),
	},
	{
		label: '가격',
		key: 'price',
		filter: (book: IBookDetail) => {
			return `${formatNumber(book.price)}원`;
		},
	},
];

export default function BookDetail() {
	const { bookId } = useParams();
	const { book } = useBook(bookId);

	if (!book) return null;

	console.log(book);
	return (
		<BookDetailStyle>
			<header className="header">
				<div className="img">
					<img src={getImgSrc(book.img)} alt={book.title} />
				</div>
				<div className="info">
					<Title size="large" color="text">
						{book.title}
					</Title>

					{bookInfoList.map((item) => (
						<dl>
							<dt>{item.label}</dt>
							<dt>
								{item.filter
									? item.filter(book)
									: book[item.key as keyof IBookDetail]}
							</dt>
						</dl>
					))}
				</div>
			</header>
			<div className="content"></div>
		</BookDetailStyle>
	);
}

const BookDetailStyle = styled.div``;
