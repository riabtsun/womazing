import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={'container'}>
      <h1>{t('home.firstScreen.title')}</h1>
    </div>
  );
};

export default Home;
