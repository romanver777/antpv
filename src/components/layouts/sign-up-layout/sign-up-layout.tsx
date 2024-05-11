import style from "./sign-up-layout.module.scss";

type TSignUpLayout = {
  children: React.ReactNode;
};

function SignUpLayout({ children }: TSignUpLayout) {
  return <div className={style.signUpLayout}>{children}</div>;
}

export default SignUpLayout;
