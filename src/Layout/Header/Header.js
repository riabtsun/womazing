import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CustomContext } from '../../Context';
import { useTranslation } from 'react-i18next';
import Logo from '../../components/UI/Icons/Logo';
import Phone from '../../components/UI/Icons/Phone';
import ShoppingBasket from '../../components/UI/Icons/ShoppingBasket';
import styles from './Header.module.sass';
import UserIcon from '../../components/UI/Icons/UserIcon';

const Header = () => {
  const { t, i18n } = useTranslation();
  const { user, logOutUser } = useContext(CustomContext);
  console.log(i18n.languages);

  const changesLanguage = lang => {
    return i18n.changeLanguage(lang);
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
            <a className={styles.phoneLink} href="tel:+74958235412">
              +7 (495) 823-54-12
            </a>
          </div>
          <a href="#">
            <ShoppingBasket />
          </a>
          <div className={styles.userStatus}>
            {user && user.login.length ? (
              <Link
                className={styles.userStatusInfo}
                to="/"
                onClick={() => logOutUser()}
              >
                <UserIcon />
                {user.login} Вийти
              </Link>
            ) : (
              <Link to="/login">Увійти</Link>
            )}{' '}
          </div>
          <div>
            {i18n.languages.map((lang, i) => {
              return (
                <button
                  key={i}
                  className={
                    lang === i18n.language
                      ? styles.languageBtnActive
                      : styles.languageBtn
                  }
                  onClick={() => changesLanguage(lang)}
                >
                  {lang}
                </button>
              );
            })}
            <button
              className={styles.languageBtn}
              onClick={() => changesLanguage('en')}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
