import style from "./auth-tool.module.scss";
import Button from "../button/button";
import exitIcon from "../../assets/exit.svg";

type TProps = {
  onLogOut: () => void;
};

function AuthTool({ onLogOut }: TProps) {
  return (
    <div className={style.authTool}>
      <Button
        icon={exitIcon}
        width="18"
        height="18"
        title="Выход"
        onHandleClick={onLogOut}
      />
    </div>
  );
}

export default AuthTool;
