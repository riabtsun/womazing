import { useContext, useState } from 'react';
import { CustomContext } from '../../Context';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import HomeSlider from './HomeSlider/HomeSlider';
import Collection from './Collection/Collection';
import Important from './Important/Important';
import styles from './Home.module.sass';

const Home = () => {
  const { t } = useTranslation();

  const { count, user } = useContext(CustomContext);
  // console.log(user);
  return (
    <div className={'container'}>
      <HomeSlider />
      <Collection />
      {/*<h1>{t('home.firstScreen.title')}</h1>*/}
      <Link className={styles.openShopBtn} to="/shop">
        Открыть магазин
      </Link>
      <Important />
    </div>
  );
};

export default Home;
