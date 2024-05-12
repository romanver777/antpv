import style from "./side-layout.module.scss";

type TProps = {
  side?: string;
  children: React.ReactNode;
};

function SideLayout({ side, children }: TProps) {
  const newClass = side !== undefined ? `sideLayout_${side}` : "";

  const newStyle = newClass
    ? style.sideLayout + " " + style[newClass]
    : style.sideLayout;

  return <div className={newStyle}>{children}</div>;
}

export default SideLayout;
