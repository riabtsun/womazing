import styles from './Important.module.sass';
import ImportantCard from './ImportantCard';
import QualityIcon from '../../../components/UI/Icons/QualityIcon';
import UserIcon from '../../../components/UI/Icons/UserIcon';
import SpeedIcon from '../../../components/UI/Icons/SpeedIcon';
import HandIcon from '../../../components/UI/Icons/HandIcon';
const Important = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Что для нас важно</h2>
      <div className={styles.importantCards}>
        <ImportantCard
          icon={<QualityIcon />}
          title={'Качество'}
          description={
            'Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества'
          }
        />
        <ImportantCard
          icon={<SpeedIcon />}
          title={'Скорость'}
          description={
            'Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах'
          }
        />
        <ImportantCard
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
