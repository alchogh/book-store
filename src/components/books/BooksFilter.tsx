import { useCategory } from '../../hooks/useCategory';
import Button from '../common/Button';
import { useSearchParams } from 'react-router-dom';
import { styled } from 'styled-components';

export default function BooksFilter() {
	const { category } = useCategory();
	const [searchParams, setSearchParams] = useSearchParams();

	const handleCategory = (id: number | null) => {
		const newSearchParams = new URLSearchParams(searchParams);
		console.log(newSearchParams);
		if (id === null) {
			newSearchParams.delete('category_id');
		} else {
			newSearchParams.set('category_id', id.toString());
		}
		setSearchParams(newSearchParams);
	};

	const current_category = searchParams.get('category_id');

	const selectedButton = (id: string | number) => {};

	const onClick = () => {
		const newSearchParams = new URLSearchParams(searchParams);
		newSearchParams.get('as');
		console.log(newSearchParams);
	};

	return (
		<BooksFilterStyle>
			<div className="category">
				{category.map((item) => (
					<Button
						size="medium"
						scheme={
							current_category === item.category_id?.toString()
								? 'primary'
								: 'normal'
						}
						key={item.category_id}
						onClick={() => handleCategory(item.category_id)}
					>
						{item.category_name}
					</Button>
				))}
			</div>
			<div className="new">
				<Button size="medium" scheme="normal" onClick={onClick}>
					신간
				</Button>
			</div>
		</BooksFilterStyle>
	);
}

const BooksFilterStyle = styled.div`
	display: flex;
	gap: 24px;

	.category {
		display: flex;
		gap: 8px;
	}
`;
