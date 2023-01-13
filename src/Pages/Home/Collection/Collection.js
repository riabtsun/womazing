import ProductCard from '../../../components/ProductCard/ProductCard';
import styles from '../Home.module.sass';
import Img1 from '../../../Assets/images/usa.jpg';
import Img2 from '../../../Assets/images/Glow.jpg';
import Img3 from '../../../Assets/images/sweet.jpg';

const Collection = () => {
  return (
    <section>
      <div>
        <h2 className={styles.sectionName}>Новая коллекция</h2>
        <div className={styles.collectionPreview}>
          <ProductCard
            image={Img1}
            name={'Футболка USA'}
            price={129}
            oldPrice={229}
          />
          <ProductCard image={Img2} name={'Футболка USA'} price={129} />
          <ProductCard image={Img3} name={'Футболка USA'} price={129} />
        </div>
      </div>
    </section>
  );
};

export default Collection;
