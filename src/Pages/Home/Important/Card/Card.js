import styles from '../Important.module.sass';
const Card = ({ icon, title, description }) => {
  return (
    <div className={styles.importantCard}>
      {icon}
      <h4 className={styles.cardTitle}>{title}</h4>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

export default Card;
