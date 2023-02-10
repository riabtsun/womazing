import styles from './Shop.module.sass';
import PageTitle from '../../components/PageTitle/PageTitle';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import { useTranslation } from 'react-i18next';
import { useState, useContext } from 'react';
import { CustomContext } from '../../Context';
import ProductCard from '../../components/ProductCard/ProductCard';
import Img1 from '../../Assets/Images/usa.jpg';
const Shop = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState('all');

  const { collection } = useContext(CustomContext);

  return (
    <section>
      <div className="container">
        <PageTitle title={'Магазин'} />
        <h2 className={styles.title}>Магазин</h2>
        <BreadCrumb source={'/shop'} selfName={'shop'} />
        <ul className={styles.shopList}>
          <li
            className={
              styles.shopListItem +
              ' ' +
              `${status === 'all' && styles.shopListItem_active}`
            }
            onClick={() => setStatus('all')}
          >
            {t('shop.all')}
          </li>
          <li
            className={
              styles.shopListItem +
              ' ' +
              `${status === 'coat' && styles.shopListItem_active}`
            }
            onClick={() => setStatus('coat')}
          >
            {t('shop.suit')}
          </li>
          <li
            className={
              styles.shopListItem +
              ' ' +
              `${status === 'sweatshirt' && styles.shopListItem_active}`
            }
            onClick={() => setStatus('sweatshirt')}
          >
            {t('shop.sweatshirt')}
          </li>
          <li
            className={
              styles.shopListItem +
              ' ' +
              `${status === 'cardigan' && styles.shopListItem_active}`
            }
            onClick={() => setStatus('cardigan')}
          >
            {t('shop.hoodie')}
          </li>
          <li
            className={
              styles.shopListItem +
              ' ' +
              `${status === 'hoodie' && styles.shopListItem_active}`
            }
            onClick={() => setStatus('hoodie')}
          >
            {t('shop.t-shirt')}
          </li>
        </ul>
        <p>Lorem ipsum dolor sit.</p>

        <div className={styles.shopRow}>
          {collection.map(item => (
            <ProductCard
              key={item.id}
              image={item.image}
              // name={t('home.collection.text1')}
              name={item.title}
              price={item.price}
              oldPrice={229}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
