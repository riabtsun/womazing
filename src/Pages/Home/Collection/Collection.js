import ProductCard from '../../../components/ProductCard/ProductCard';
import styles from '../Home.module.sass';
import Img1 from '../../../Assets/Images/usa.jpg';
import Img2 from '../../../Assets/Images/Glow.jpg';
import Img3 from '../../../Assets/Images/sweet.jpg';
import { useTranslation } from 'react-i18next';

const Collection = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div>
        <h2 className={styles.sectionName}>{t('home.collection.title')}</h2>
        <div className={styles.collectionPreview}>
          <ProductCard
            image={Img1}
            name={t('home.collection.text1')}
            price={129}
            oldPrice={229}
          />
          <ProductCard
            image={Img2}
            name={t('home.collection.text2')}
            price={129}
          />
          <ProductCard
            image={Img3}
            name={t('home.collection.text3')}
            price={129}
          />
        </div>
      </div>
    </section>
  );
};

export default Collection;
