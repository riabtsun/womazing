import { NavLink } from 'react-router-dom';
import styles from './Header.module.sass';
import Logo from '../../components/UI/Icons/Logo';
import Phone from '../../components/UI/Icons/Phone';
import ShoppingBasket from '../../components/UI/Icons/ShoppingBasket';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { lang, i18n } = useTranslation();

  const changesLanguage = lang => {
    i18n.changeLanguage(lang);
  };
  return (
    <header>
      <div className="container">
        <div className={styles.header}>
          <Logo />
          <ul className={styles.header__menu}>
            <li className={styles.header__menuItem}>
              <NavLink to="/" className={styles.header__link}>
                Главная
              </NavLink>
            </li>
            <li className={styles.header__menuItem}>
              <NavLink to="/shop" className={styles.header__link}>
                Магазин
              </NavLink>
            </li>
            <li className={styles.header__menuItem}>
              <NavLink to="/about" className={styles.header__link}>
                О бренде
              </NavLink>
            </li>
            <li className={styles.header__menuItem}>
              <NavLink to="/contacts" className={styles.header__link}>
                Контакты
              </NavLink>
            </li>
          </ul>
          <div className={styles.callback}>
            <Phone />
            <a href="tel:+74958235412">+7 (495) 823-54-12</a>
          </div>
          <a href="#">
            <ShoppingBasket />
          </a>
        </div>
      </div>
      <button onClick={() => changesLanguage('ua')}>ua</button>
      <span>---</span>
      <button onClick={() => changesLanguage('en')}>en</button>
    </header>
  );
};

export default Header;
