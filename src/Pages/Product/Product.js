import { useEffect, useState, useContext } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CustomContext } from '../../Context';
import PageTitle from '../../components/PageTitle/PageTitle';
import axios from 'axios';
import styles from './Product.module.sass';

const Product = () => {
  const { t } = useTranslation();
  const params = useParams();
  const [product, setProduct] = useState({});

  const { setPage, setStatus } = useContext(CustomContext);
  console.log(product.image[0][0]);

  useEffect(() => {
    axios(`http://localhost:8080/clothes/${params.id}`).then(({ data }) =>
      setProduct(data)
    );
  }, []);

  return (
    <section>
      <div className="container">
        <div className="breadcrumbs">
          <Link to={'/'}>{t('contacts.crumbs.link1')}' '</Link>
          <NavLink
            to={'/shop'}
            onClick={() => {
              setStatus(`${product.category}`);
              setPage(1);
            }}
          >
            {product.category} -
          </NavLink>
          <p style={{ color: '#909090' }}> - {product.title}</p>
        </div>

        <PageTitle
          title={t(`shop.${product.category}`) + ` ${product.title}`}
        />
        <div className={styles.productContent}>
          <img src={`../${product.image}`} alt={product.title} />
          <div>
            <p></p>
            <p></p>
            <ul>
              <li></li>
            </ul>
            <p></p>
            <ul>
              <li></li>
            </ul>
            <div>
              <input min={1} defaultValue={1} type="number" />
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
