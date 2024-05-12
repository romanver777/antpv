import style from "./partner-title.module.scss";
import type { TPartner } from "../../store/partner/partner";
import Avatar from "../avatar/avatar";

type TProps = {
  item: TPartner;
};

function PartnerTitle({ item }: TProps) {
  return (
    <div className={style.partnerTitle}>
      <Avatar item={item} size="big" />
      <div className={style.partnerTitle__text}>
        <h1
          className={style.partnerTitle__name}
        >{`${item.first_name} ${item.last_name}`}</h1>
        <span className={style.partnerTitle__role}>Партнер</span>
      </div>
    </div>
  );
}

export default PartnerTitle;
