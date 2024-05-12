import style from "./partners-title.module.scss";

function PartnersTitle() {
  return (
    <div className={style.partnersTitle}>
      <h1 className={style.partnersTitle__title}>Наша команда</h1>
      <h2 className={style.partnersTitle__desc}>
        Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
        ложатся на их плечи, и умеющие находить выход из любых, даже самых
        сложных ситуаций.
      </h2>
    </div>
  );
}

export default PartnersTitle;
