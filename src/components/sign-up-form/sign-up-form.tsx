/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import cn from "classnames";
import style from "./sign-up-form.module.scss";

export type TFormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

type TSignUpForm = {
  error: string | null;
  children: React.ReactNode;
  onSignUp: (data: TFormData) => void;
  loading: boolean;
};

function SignUpForm({ error, children, onSignUp, loading }: TSignUpForm) {
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<TFormData>();

  const onSubmit: SubmitHandler<TFormData> = (data) => {
    if (data.password !== data.passwordConfirm) {
      setConfirmPasswordError(true);
      return;
    }
    onSignUp(data);
  };

  return (
    <form
      className={cn(style.signUpForm, { [style.signUpForm_noEvents]: loading })}
    >
      <div className={style.signUpForm__fields}>
        <h2 className={style.signUpForm__title}>Регистрация</h2>
        {error && <div className={style.signUpForm__errorMsg}>{error}</div>}
        {React.Children.map(children, (child) => {
          return child.props.name
            ? React.createElement(child.type, {
                ...child.props,
                register,
                errors,
                confirmPasswordError,
                key: child.props.name,
                clearErrors,
              })
            : child;
        })}
      </div>
      <button
        type="button"
        className={style.signUpForm__btn}
        onClick={handleSubmit(onSubmit)}
      >
        Зарегистрироваться
      </button>
    </form>
  );
}

export default SignUpForm;
