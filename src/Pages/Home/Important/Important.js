import styles from './Important.module.sass';
import Card from '../../../components/Card/Card';
import QualityIcon from '../../../Assets/Icons/QualityIcon';
import SpeedIcon from '../../../Assets/Icons/SpeedIcon';
import HandIcon from '../../../Assets/Icons/HandIcon';

const Important = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Что для нас важно</h2>
      <div className={styles.importantCards}>
        <Card
          icon={<QualityIcon />}
          title={'Качество'}
          description={
            'Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества'
          }
        />
        <Card
          icon={<SpeedIcon />}
          title={'Скорость'}
          description={
            'Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах'
          }
        />
        <Card
          icon={<HandIcon />}
          title={'Ответственность'}
          description={
            'Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing'
          }
        />
      </div>
    </section>
  );
};

export default Important;
