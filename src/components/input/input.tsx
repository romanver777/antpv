import { useState } from "react";
import { UseFormRegister, FieldErrors, FieldValues } from "react-hook-form";
import cn from "classnames";
import viewIcon from "../../assets/view.svg";
import viewActiveIcon from "../../assets/view-active.svg";
import style from "./input.module.scss";

type TInput = {
  label: string;
  name: string;
  type: string;
  min?: number;
  max?: number;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
};

function Input(props: TInput) {
  const { label, name, type, min, max, register, errors } = props;
  const EMAIL_PATTERN =
    /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [isShow, setShow] = useState(false);

  const onShowPass = (e: React.MouseEvent) => {
    e.preventDefault();
    setShow(!isShow);
  };

  const inputClass = errors[name]
    ? cn(style.input__input, style.input__input_error)
    : style.input__input;

  return (
    <div className={style.input}>
      <label className={style.input__label}>{label}</label>
      <div className={style.input__block}>
        <input
          type={type === "password" && !isShow ? "password" : "text"}
          className={inputClass}
          placeholder={type === "password" ? "******" : label}
          {...register(name, {
            required: "Это обязательное поле",
            minLength: min || 2,
            maxLength: max || 25,
            pattern: name === "email" ? EMAIL_PATTERN : undefined,
            validate: (value, formValues) => {
              if (name === "passwordConfirm") {
                return value === formValues.password;
              }
            },
          })}
        />
        {type === "password" && (
          <button className={style.input__btn} onClick={onShowPass}>
            {isShow ? (
              <img src={viewActiveIcon} className={style.input__img} />
            ) : (
              <img src={viewIcon} className={style.input__img} />
            )}
          </button>
        )}
      </div>
      {errors[name] && <div className={style.input__error}>Ошибка</div>}
    </div>
  );
}

export default Input;
