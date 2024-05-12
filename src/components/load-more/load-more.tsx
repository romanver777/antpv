import style from "./load-more.module.scss";
import arrowIcon from "../../assets/arrow.svg";

type TProps = {
  onLoadItems: () => void;
  isShow: boolean;
};

function LoadMore({ onLoadItems, isShow }: TProps) {
  if (!isShow) return null;

  return (
    <div className={style.loadMore}>
      <button className={style.loadMore__btn} onClick={onLoadItems}>
        <span className={style.loadMore__text}>Показать еще</span>
        <img src={arrowIcon} alt="arrow icon" width={17} height={9} />
      </button>
    </div>
  );
}

export default LoadMore;
