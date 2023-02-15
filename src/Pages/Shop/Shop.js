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
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState('');
  const [active, setActive] = useState('');

  const { collection } = useContext(CustomContext);

  return (
    <section>
      <div className="container">
        <PageTitle title={'Магазин'} />
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
        <div className={styles.sorting}>
          Сортувати
          <button
            className={`${styles.sortingBtn} ${sort === 'grow' ? active : ''}`}
            onClick={function (event) {
              setSort('grow');
              sort === 'grow' && setActive(`${styles.sortingBtnActive}`);
            }}
          >
            За зменшенням ціни
          </button>
          <button
            className={`${styles.sortingBtn} ${sort === 'less' ? active : ''}`}
            onClick={() => {
              setSort('less');
              sort === 'less' && setActive(`${styles.sortingBtnActive}`);
            }}
          >
            За зростанням ціни
          </button>
        </div>
        <p className={styles.productsValues}>
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
            .sort((a, b) => {
              if (sort === 'grow') {
                return (b.priceSale || b.price) - (a.priceSale || a.price);
              } else if (sort === 'less') {
                return (a.priceSale || a.price) - (b.priceSale || b.price);
              }
            })
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
                oldPrice={item.priceSale}
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
