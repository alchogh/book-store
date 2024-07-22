import Button from "../components/common/Button";
import InputText from "../components/common/InputText";
import Title from "../components/common/Title";

export default function Home() {
	return (
		<>
			<Title size="large" color="secondary">
				제목 테스트
				<Button size="large" scheme="primary">
					버튼
				</Button>
				<InputText placeholder="hi" />
			</Title>
		</>
	);
}
