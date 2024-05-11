import style from "./message.module.scss";

type TMessage = {
  text: string;
};

function Message({ text }: TMessage) {
  return <div className={style.message}>{text}</div>;
}

export default Message;
