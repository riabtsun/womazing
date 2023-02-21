import { Link } from 'react-router-dom';
import styles from './ProductCard.module.sass';
import Arrow from '../../Assets/Icons/Arrow';

const ProductCard = ({ image, name, price, oldPrice, cardPath }) => {
  return (
    <Link to={cardPath}>
      <div className={styles.productCard}>
        <div className={styles.imageWrap}>
          <img className={styles.productCardImage} src={image} alt="clothes" />
        </div>
        <div className={styles.arrow}>
          <Arrow className={'arrow'} color={'#fff'} />
        </div>
        <h4 className={styles.cardName}>{name}</h4>
        <span className={oldPrice && styles.oldPrice}>${price}</span>
        <span>{oldPrice && '$' + oldPrice}</span>
      </div>
    </Link>
  );
};

export default ProductCard;
