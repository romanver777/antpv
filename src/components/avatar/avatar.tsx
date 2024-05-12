import cn from "classnames";
import style from "./avatar.module.scss";
import { TPartner } from "../../store/partner/partner";

type TProps = {
  item: TPartner;
  size: string;
};

function Avatar({ item, size }: TProps) {
  return (
    <div className={cn(style.avatar, style[`avatar__${size}`])}>
      <img
        src={item.avatar}
        alt={`${item.first_name} ${item.last_name} аватар`}
        className={style.avatar__img}
      />
    </div>
  );
}

export default Avatar;
