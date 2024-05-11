import cn from "classnames";
import style from "./spinner.module.scss";

type TSpinner = {
  loading: boolean;
  children: React.ReactNode;
};

function Spinner({ loading, children }: TSpinner) {
  return (
    <div
      className={cn(style.spinner, {
        [style.spinner_loading]: loading,
      })}
    >
      {children}
    </div>
  );
}

export default Spinner;
