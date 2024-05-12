import style from "./header.module.scss";

type TProps = {
  children: React.ReactNode;
};

function Header({ children }: TProps) {
  return (
    <header className={style.header}>
      <div className={style.header__container}>{children}</div>
    </header>
  );
}

export default Header;
