import { TPartner } from "../../store/partner/partner";
import style from "./partner-content.module.scss";
import phoneIcon from "../../assets/phone.svg";
import emailIcon from "../../assets/email.svg";

type TProps = {
  item: TPartner;
};

function PartnerContent({ item }: TProps) {
  return (
    <div className={style.partnerContent}>
      <div className={style.partnerContent__text}>
        <p>
          Клиенты видят в нем эксперта по вопросам разработки комплексных
          решений финансовых продуктов, включая такие аспекты, как
          организационная структура, процессы, аналитика и ИТ-компоненты. Он
          помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать
          процессы за счет применения новейших технологий и увеличивать продажи,
          используя самые современные аналитические инструменты.
        </p>
        <br />
        <p>
          В работе с клиентами недостаточно просто решить конкретную проблему
          или помочь справиться с трудностями. Не менее важно уделять внимание
          обмену знаниями: "Один из самых позитивных моментов — это осознание
          того, что ты помог клиенту перейти на совершенно новый уровень
          компетентности, уверенность в том, что после окончания проекта у
          клиента есть все необходимое, чтобы дальше развиваться
          самостоятельно".
        </p>
        <br />
        <p>
          Помимо разнообразных проектов для клиентов финансового сектора, Сорин
          ведет активную предпринимательскую деятельность. Он является
          совладельцем сети клиник эстетической медицины в Швейцарии,
          предлагающей инновационный подход к красоте, а также инвестором других
          бизнес-проектов.
        </p>
      </div>
      <div className={style.partnerContent__contacts}>
        <div className={style.partnerContent__phone}>
          <img src={phoneIcon} width={20} height={20} />
          <span>+7 (954) 333-44-55</span>
        </div>
        <div className={style.partnerContent__email}>
          <img src={emailIcon} width={21} height={15} />
          <span>{item.email}</span>
        </div>
      </div>
    </div>
  );
}

export default PartnerContent;
