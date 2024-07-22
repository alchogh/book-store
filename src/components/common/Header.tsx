import logo from "../../asset/bookstore-logo.png";
import { FaSignInAlt, FaRegUser } from "react-icons/fa";
import { styled } from "styled-components";

export default function Header() {
	return (
		<HeaderStyle>
			<h1 className="logo">
				<img src={logo} alt="logo" />
			</h1>
			<nav className="category">
				<ul>
					{CATEGORY.map((item) => (
						<li key={item.id}>
							<a
								href={
									item.id === null
										? "/books"
										: `/books?category_id=${item.name}`
								}
							>
								{item.name}
							</a>
						</li>
					))}
				</ul>
			</nav>
			<nav className="auth">
				<ul>
					<li>
						<a href="/login">
							<FaSignInAlt />
							로그인
						</a>
					</li>
					<li>
						<a href="/signup">
							<FaRegUser />
							회원가입
						</a>
					</li>
				</ul>
			</nav>
		</HeaderStyle>
	);
}

const HeaderStyle = styled.header`
	width: 100%;
	margin: 0 auto;
	max-width: ${({ theme }) => theme.layout.width.large};
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 0;
	border-bottom: 1px solid ${({ theme }) => theme.color.background};

	.logo {
		img {
			width: 200px;
			height: 80px;
		}
	}

	.category {
		ul {
			display: flex;
			gap: 32px;
			li {
				a {
					font-size: 1.5rem;
					font-weight: 600;
					text-decoration: none;
					color: ${({ theme }) => theme.color.text};
					&:hover {
						color: ${({ theme }) => theme.color.primary};
					}
				}
			}
		}
	}

	.auth {
		ul {
			display: flex;
			gap: 16px;
			li {
				a {
					font-size: 1rem;
					font-weight: 600;
					text-decoration: none;
					display: flex;
					align-items: center;
					line-height: 1;
					svg {
						margin-right: 6px;
					}
				}
			}
		}
	}

	h1 {
		color: ${({ theme }) => theme.color.primary};
	}
`;

const CATEGORY = [
	{ id: null, name: "전체" },
	{ id: 0, name: "동화" },
	{ id: 1, name: "소설" },
	{ id: 2, name: "사회" },
];
