import styles from './ProductCard.module.sass';
import Arrow from '../../Assets/Icons/Arrow';

const ProductCard = ({ image, name, price, oldPrice }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageWrap}>
        <img className={styles.productCardImage} src={image} alt="clothes" />
      </div>
      <div className={styles.arrow}>
        <Arrow className={'arrow'} color={'#fff'} />
      </div>
      <h4 className={styles.cardName}>{name}</h4>
      <span className={styles.oldPrice}>{oldPrice && '$' + oldPrice}</span>
      <span>${price}</span>
    </div>
  );
};

export default ProductCard;
