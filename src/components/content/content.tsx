import style from "./content.module.scss";

type TProps = {
  children: React.ReactNode;
};

function Content({ children }: TProps) {
  return <main className={style.content}>{children}</main>;
}

export default Content;
