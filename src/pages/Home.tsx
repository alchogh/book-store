import Button from "../components/common/Button";
import Title from "../components/common/Title";

export default function Home() {
	return (
		<>
			<Title size="large" color="secondary">
				제목 테스트
				<Button size="large" scheme="primary">
					버튼
				</Button>
			</Title>
		</>
	);
}
