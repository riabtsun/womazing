import styles from './ProductCard.module.sass';
import Arrow from '../../Assets/Icons/Arrow';

const ProductCard = ({ image, name, price, oldPrice }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageWrap}>
        <img className={''} src={image} alt="clothes" />
      </div>
      <div className={styles.arrow}>
        <Arrow className={'arrow'} color={'#fff'} styles={{}} />
      </div>
      <h4 className={styles.cardName}>{name}</h4>
      <span>${price}</span>
      <span>${oldPrice}</span>
    </div>
  );
};

export default ProductCard;
