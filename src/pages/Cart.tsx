import React from 'react';
import Title from '../components/common/Title';
import styled from 'styled-components';
import CartItem from '../components/cart/CartItem';

export default function Cart() {
	return (
		<>
			<Title size="large">장바구니</Title>
			<CartStyle>
				<div className="content">
					<CartItem />
				</div>
				<div className="summary">summary</div>
			</CartStyle>
		</>
	);
}

const CartStyle = styled.div``;
