import { Link, useLocation } from "react-router-dom";
import style from "./partner-card.module.scss";
import type { TPartner } from "../../app/partners-page/partners-page";
import likeIcon from "../../assets/like.svg";
import Avatar from "../avatar/avatar";

type TProps = {
  item: TPartner;
};

function PartnerCard({ item }: TProps) {
  const location = useLocation();

  return (
    <li className={style.partnerCard}>
      <div className={style.partnerCard__links}>
        <Link to={`/user/${item.id}`} state={{ back: location.pathname }}>
          <Avatar item={item} size="small" />
        </Link>
        <Link
          to={`/user/${item.id}`}
          state={{ back: location.pathname }}
          className={style.partnerCard__name}
        >{`${item.first_name} ${item.last_name}`}</Link>
      </div>
      <div className={style.partnerCard__likeBlock}>
        <button className={style.partnerCard__likeBtn}>
          <img
            src={likeIcon}
            className={style.partnerCard__likeImg}
            alt="like icon"
            width={14}
            height={12}
          />
        </button>
      </div>
    </li>
  );
}

export default PartnerCard;
