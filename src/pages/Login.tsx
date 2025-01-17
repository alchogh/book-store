import { Link, useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import InputText from "../components/common/InputText";
import Title from "../components/common/Title";
import { useForm } from "react-hook-form";
import { login, signup } from "../api/auth.api";
import { useAlert } from "../hooks/useAlert";
import { SignupStyle } from "./Signup";
import { useAuthStore } from "../store/authStore";

export interface SignupProps {
  email: string;
  password: string;
}

export default function Login() {
  const navigate = useNavigate();
  const showAlert = useAlert();

  const { isLoggedIn, storeLogin, storeLogout } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupProps>();

  const onSubmit = (data: SignupProps) => {
    login(data).then(
      (res) => {
        //상태 변화
        storeLogin(res.token);
        console.log(res.token);
        showAlert("로그인 완료되었습니다");
        navigate("/");
      },
      () => {
        showAlert("로그인이 실패했습니다.");
      }
    );
  };

  return (
    <>
      <Title size="large">로그인</Title>
      <SignupStyle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <InputText
              placeholder="이메일"
              inputType="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="error-text">이메일을 입력해주세요.</p>
            )}
          </fieldset>
          <fieldset>
            <InputText
              placeholder="비밀번호"
              inputType="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="error-text">비밀번호를 입력해주세요.</p>
            )}
          </fieldset>
          <fieldset>
            <Button size="medium" scheme="primary" type="submit">
              회원가입
            </Button>
          </fieldset>
          <div className="info">
            <Link to="/reset">로그인</Link>
          </div>
        </form>
      </SignupStyle>
    </>
  );
}
