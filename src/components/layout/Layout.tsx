import Header from "../common/Header";
import Footer from "../common/Footer";
import styled from "styled-components";

interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<Header />
			<LayoutStyled>{children}</LayoutStyled>
			<Footer />
		</>
	);
}

const LayoutStyled = styled.main`
	width: 100%;
	margin: 0 auto;
	max-width: ${({ theme }) => theme.layout.width.large};
	padding: 20px 0;
`;
