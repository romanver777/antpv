import cn from "classnames";
import style from "./page-layout.module.scss";

type TPageLayout = {
  type?: string;
  children: React.ReactNode;
};

function PageLayout({ type, children }: TPageLayout) {
  return (
    <div
      className={cn(style.pageLayout, {
        [style.pageLayout__modal]: type === "modal",
      })}
    >
      {children}
    </div>
  );
}

export default PageLayout;
