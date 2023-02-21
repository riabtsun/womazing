import { NavLink } from 'react-router-dom';
import styles from './Footer.module.sass';
import Logo from '../../Assets/Icons/Logo';
import Instagram from '../../Assets/Icons/Instagram';
import Facebook from '../../Assets/Icons/Facebook';
import Twitter from '../../Assets/Icons/Twitter';
import VisaImg from '../../Assets/Icons/visa-mastercard.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerWrapper}>
          <div>
            <Logo />
            <ul className={styles.copyrights}>
              <li>
                <a className={styles.copyrightsLink} href="google.com">
                  © Все права защищены
                </a>
                n
              </li>
              <li>
                <a className={styles.copyrightsLink} href="google.com">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a className={styles.copyrightsLink} href="google.com">
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
                  <a className={styles.shopListLink} href="google.com">
                    Пальто
                  </a>
                </li>
                <li>
                  <a className={styles.shopListLink} href="google.com">
                    Свитшоты
                  </a>
                </li>
                <li>
                  <a className={styles.shopListLink} href="google.com">
                    Кардиганы
                  </a>
                </li>
                <li>
                  <a className={styles.shopListLink} href="google.com">
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
                <a target="_blank" href="google.com">
                  <Instagram />
                </a>
              </li>
              <li>
                <a target="_blank" href="google.com">
                  <Facebook />
                </a>
              </li>
              <li>
                <a target="_blank" href="google.com">
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
