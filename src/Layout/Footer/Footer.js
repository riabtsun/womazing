import { NavLink } from 'react-router-dom';
import styles from './Footer.module.sass';
import Logo from '../../components/UI/Icons/Logo';
import Instagram from '../../components/UI/Icons/Instagram';
import Facebook from '../../components/UI/Icons/Facebook';
import Twitter from '../../components/UI/Icons/Twitter';
import VisaImg from '../../components/UI/Icons/visa-mastercard.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerWrapper}>
          <div>
            <Logo />
            <ul className={styles.copyrights}>
              <li>
                <a className={styles.copyrightsLink} href="#">
                  © Все права защищены
                </a>
              </li>
              <li>
                <a className={styles.copyrightsLink} href="#">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a className={styles.copyrightsLink} href="#">
                  Публичная оферта
                </a>
              </li>
            </ul>
          </div>
          <ul className={styles.footerMenu}>
            <li>
              <NavLink to="/">Главная</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Магазин</NavLink>
              <ul className={styles.shopList}>
                <li>
                  <a className={styles.shopListLink} href="#">
                    Пальто
                  </a>
                </li>
                <li>
                  <a className={styles.shopListLink} href="#">
                    Свитшоты
                  </a>
                </li>
                <li>
                  <a className={styles.shopListLink} href="#">
                    Кардиганы
                  </a>
                </li>
                <li>
                  <a className={styles.shopListLink} href="#">
                    Толстовки
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/about">О бренде</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Контакты</NavLink>
            </li>
          </ul>
          <div>
            <a className={styles.footerContactLink} href="tel:+74958235412">
              +7 (495) 823-54-12
            </a>
            <a
              className={styles.footerContactLink}
              href="mailto:hello@womazing.com"
            >
              hello@womazing.com
            </a>
            <ul className={styles.socials}>
              <li>
                <a target="_blank" href="#">
                  <Instagram />
                </a>
              </li>
              <li>
                <a target="_blank" href="#">
                  <Facebook />
                </a>
              </li>
              <li>
                <a target="_blank" href="#">
                  <Twitter />
                </a>
              </li>
            </ul>
            <img src={VisaImg} alt="cards" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
