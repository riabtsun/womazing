import { Link } from 'react-router-dom';
import girl1 from './girl1.jpg';
import girl2 from './girl2.jpg';
import styles from './AboutBrand.module.sass';

const AboutBrand = () => {
  return (
    <section>
      <div className="container">
        <h2 className={styles.pageTitle}>О бренде</h2>
        <span className={styles}>Главная - </span>
        <span className={styles}>О бренде</span>
        <div className={styles.mainContent}>
          <div className={styles.contentBlock}>
            <img src={girl1} alt="girl" className={styles.contentImage} />
            <div className={styles.contentDescription}>
              <h3 className={styles.contentTitle}>Идея и женщина</h3>
              <p className={styles.contentText}>
                Womazing была основана в 2010-ом и стала одной из самых успешных
                компаний нашей страны. Как и многие итальянские фирмы, Womazing
                остаётся семейной компанией, хотя ни один из членов семьи не
                является модельером.
              </p>
              <br />
              <p className={styles.contentText}>
                Мы действуем по успешной формуле, прибегая к услугам известных
                модельеров для создания своих коллекций. Этот метод был описан
                критиком моды Колином Макдауэллом как форма дизайнерского
                со-творчества, характерная для ряда итальянских prêt-a-porter
                компаний.
              </p>
            </div>
          </div>
          <div className={styles.contentBlock}>
            <div className={styles.contentDescription}>
              <h3 className={styles.contentTitle}>Магия в деталях</h3>
              <p className={styles.contentText}>
                Первый магазин Womazing был открыт в маленьком городке на севере
                страны в 2010-ом году. Первая коллекция состояла из двух пальто
                и костюма, которые были копиями парижских моделей.
              </p>
              <br />
              <p className={styles.contentText}>
                Несмотря на то, что по образованию основательница была
                адвокатом, ее семья всегда была тесно связана с шитьём
                (прабабушка основательницы шила одежду для женщин, а мать
                основала профессиональную школу кроя и шитья). Стремление
                производить одежду для масс несло в себе большие перспективы,
                особенно в то время, когда высокая мода по-прежнему
                доминировала, а рынка качественного prêt-a-porter попросту не
                существовало.
              </p>
            </div>
            <img src={girl2} alt="girl" className={styles.contentImage} />
          </div>
          <Link className={styles.navLink} to={'/shop'}>
            Перейти в магазин
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutBrand;
