import style from "./button.module.scss";

type TProps = {
  icon: string;
  width: string;
  height: string;
  title: string;
  onHandleClick: () => void;
};

function Button({ icon, width, height, title, onHandleClick }: TProps) {
  return (
    <button className={style.button} onClick={onHandleClick}>
      <span className={style.button__text}>{title}</span>
      <img
        src={icon}
        className={style.button__img}
        width={width}
        height={height}
        alt="icon"
      />
    </button>
  );
}

export default Button;
