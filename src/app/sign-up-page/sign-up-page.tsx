/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { auth } from "../../store/auth/auth";
import SignUpLayout from "../../components/layouts/sign-up-layout/sign-up-layout";
import SignUpForm from "../../components/sign-up-form/sign-up-form";
import Input from "../../components/input/input";
import Spinner from "../../components/spinner/spinner";
import type { TFormData } from "../../components/sign-up-form/sign-up-form";

function SignUp() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const loading = useAppSelector((state) => state.auth.loading);
  const error = useAppSelector((state) => state.auth.error);

  useEffect(() => {
    if (isAuth) {
      const back =
        location.state?.back && location.state.back !== location.pathname
          ? location.state.back
          : "/";
      navigate(back);
    }
  }, [isAuth, navigate, location.pathname, location.state]);

  const onSendForm = (data: TFormData) => {
    dispatch(auth(data));
  };

  return (
    <SignUpLayout>
      <Spinner loading={loading}>
        <SignUpForm onSignUp={onSendForm} error={error} loading={loading}>
          <Input label="Имя" name="name" type="text" max={15} />
          <Input
            label="Электронная почта"
            name="email"
            type="text"
            min={null}
          />
          <Input
            label="Пароль"
            name="password"
            type="password"
            min={4}
            max={20}
          />
          <Input
            label="Подтвердите пароль"
            name="passwordConfirm"
            type="password"
            min={null}
          />
        </SignUpForm>
      </Spinner>
    </SignUpLayout>
  );
}

export default SignUp;
