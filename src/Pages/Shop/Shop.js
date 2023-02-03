import styles from './Shop.module.sass';
import PageTitle from '../../components/PageTitle/PageTitle';
const Shop = () => {
  return (
    <section>
      <div className="container">
        <PageTitle title={'Магазин'} />
        <h2 className={styles.title}>Магазин</h2>
      </div>
    </section>
  );
};

export default Shop;
