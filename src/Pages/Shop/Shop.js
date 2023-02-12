import styles from './Shop.module.sass';
import PageTitle from '../../components/PageTitle/PageTitle';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import { useTranslation } from 'react-i18next';
import { useState, useContext } from 'react';
import { Pagination } from 'antd';
import { CustomContext } from '../../Context';
import ProductCard from '../../components/ProductCard/ProductCard';

const Shop = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState('all');

  const { collection } = useContext(CustomContext);

  const [currentPage, setCurrentPage] = useState(1);

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
              ` ${status === 'all' && styles.shopListItem_active}`
            }
            onClick={() => {
              setStatus('all');
              setCurrentPage(1);
            }}
          >
            {t('shop.all')}
          </li>
          <li
            className={
              styles.shopListItem +
              ` ${status === 'coat' && styles.shopListItem_active}`
            }
            onClick={() => {
              setStatus('coat');
              setCurrentPage(1);
            }}
          >
            {t('shop.suit')}
          </li>
          <li
            className={
              styles.shopListItem +
              ` ${status === 'sweatshirt' && styles.shopListItem_active}`
            }
            onClick={() => {
              setStatus('sweatshirt');
              setCurrentPage(1);
            }}
          >
            {t('shop.sweatshirt')}
          </li>
          <li
            className={
              styles.shopListItem +
              ` ${status === 'cardigan' && styles.shopListItem_active}`
            }
            onClick={() => {
              setStatus('cardigan');
              setCurrentPage(1);
            }}
          >
            {t('shop.hoodie')}
          </li>
          <li
            className={
              styles.shopListItem +
              ` ${status === 't-shirt' && styles.shopListItem_active}`
            }
            onClick={() => {
              setStatus('t-shirt');
              setCurrentPage(1);
            }}
          >
            {t('shop.t-shirt')}
          </li>
        </ul>
        <p>
          Показано:
          {
            collection
              .filter(item => {
                return status === 'all' ? item : item.category === status;
              })
              .filter((item, i) => {
                return i + 1 <= currentPage * 9 && i >= currentPage * 9 - 9;
              }).length
          }
          из
          {
            collection.filter(item => {
              return status === 'all' ? item : item.category === status;
            }).length
          }
          товаров
        </p>

        <div className={styles.shopRow}>
          {collection
            .filter(item => {
              return status === 'all' ? item : item.category === status;
            })
            .filter((item, i) => {
              return i + 1 <= currentPage * 9 && i >= currentPage * 9 - 9;
            })
            .map(item => (
              <ProductCard
                key={item.id}
                image={`../${Object.values(item.image)[0]}`}
                // name={t('home.collection.text1')}
                name={item.title}
                price={item.price}
                oldPrice={item.oldPrice && item.oldPrice}
              />
            ))}
        </div>

        <div className={styles.pagination}>
          {collection.filter(item =>
            status === 'all' ? item : item.category === status
          ).length > 9 ? (
            <Pagination
              current={currentPage}
              onChange={setCurrentPage}
              total={
                collection.filter(item =>
                  status === 'all' ? item : item.category === status
                ).length
              }
              pageSize={9}
            />
          ) : (
            ''
          )}
        </div>
      </div>
    </section>
  );
};

export default Shop;
