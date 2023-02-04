import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CustomContext } from '../../Context';
import { useTranslation } from 'react-i18next';
import Logo from '../../Assets/Icons/Logo';
import Phone from '../../Assets/Icons/Phone';
import ShoppingBasket from '../../Assets/Icons/ShoppingBasket';
import styles from './Header.module.sass';
import UserIcon from '../../Assets/Icons/UserIcon';

const Header = () => {
  const { t, i18n } = useTranslation();
  const { user, logOutUser } = useContext(CustomContext);

  const changeLanguage = lang => {
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
                {t('header.link1')}
              </NavLink>
            </li>
            <li className={styles.header__menuItem}>
              <NavLink to="/shop" className={styles.header__link}>
                {t('header.link2')}
              </NavLink>
            </li>
            <li className={styles.header__menuItem}>
              <NavLink to="/about" className={styles.header__link}>
                {t('header.link3')}
              </NavLink>
            </li>
            <li className={styles.header__menuItem}>
              <NavLink to="/contacts" className={styles.header__link}>
                {t('header.link4')}
              </NavLink>
            </li>
          </ul>
          <div className={styles.callback}>
            <Phone />
            <a className={styles.phoneLink} href="tel:+74958235412">
              +7 (495) 823-54-12
            </a>
          </div>
          <Link to={'/basket'}>
            <ShoppingBasket />
          </Link>
          <div className={styles.userStatus}>
            {user && user.login.length ? (
              <div>
                <Link to={'/profile'}>{user.login} </Link>
                <Link
                  className={styles.userStatusInfo}
                  to="/"
                  onClick={() => logOutUser()}
                >
                  <UserIcon />
                  {t('header.exit')}
                </Link>
              </div>
            ) : (
              <Link to="/login">{t('header.enter')}</Link>
            )}{' '}
          </div>
          <div>
            <button
              className={styles.languageBtn}
              onClick={() => changeLanguage('en')}
            >
              EN
            </button>
            <button
              className={styles.languageBtn}
              onClick={() => changeLanguage('uk')}
            >
              Ua
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
