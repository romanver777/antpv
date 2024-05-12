import style from "./list.module.scss";
import type { TPartner } from "../../app/partners-page/partners-page";

type TProps = {
  items: TPartner[];
  renderItem: (item: TPartner) => JSX.Element;
};

function List({ items, renderItem }: TProps) {
  return (
    <div className={style.list}>
      <ul className={style.list__ul}>
        {items.map((item) => renderItem(item))}
      </ul>
    </div>
  );
}

export default List;
