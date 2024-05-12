import style from "./nav-tool.module.scss";
import Button from "../button/button";
import backIcon from "../../assets/arrow-back.svg";

type TProps = {
  onBackClick: () => void;
};

function NavTool({ onBackClick }: TProps) {
  return (
    <div className={style.navTool}>
      <Button
        icon={backIcon}
        width="7"
        height="14"
        title="Назад"
        onHandleClick={onBackClick}
      />
    </div>
  );
}

export default NavTool;
