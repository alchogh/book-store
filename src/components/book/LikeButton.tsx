import React from 'react';
import { BookDetail } from '../../models/book.model';
import styled from 'styled-components';
import Button from '../common/Button';
import { FaHeart } from 'react-icons/fa';

interface Props {
	book: BookDetail;
	onClick: () => void;
}

export default function LikeButton({ book, onClick }: Props) {
	return (
		<LikeButtonStlye
			size="medium"
			scheme={book.liked ? 'like' : 'normal'}
			onClick={onClick}
		>
			<FaHeart /> {book.likes}
		</LikeButtonStlye>
	);
}

const LikeButtonStlye = styled(Button)`
	display: flex;
	gap: 6px;
	align-items: center;

	svg {
		color: inherit;

		* {
			color: inherit;
		}
	}
`;
