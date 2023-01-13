import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import styles from './HomeSlider.module.sass';
import './HomeSlider.css';
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Arrow from '../../../components/UI/Icons/Arrow';
import slideImg1 from '../../../Assets/images/Slider1.jpg';
import slideImg2 from '../../../Assets/images/slider2.jpg';
import slideImg3 from '../../../Assets/images/slider3.jpg';
import { useTranslation } from 'react-i18next';

const HomeSlider = () => {
  const { t } = useTranslation();

  return (
    <section>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={false}
        loop={true}
        autoplay={false}
        pagination={{ el: '.homeSliderPagination', clickable: true }}
        // onSwiper={swiper => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide className={styles.slide}>
          <div>
            <h1 className={styles.sliderTitle}>
              {t('home.firstScreen.title')}
            </h1>
            <p className={styles.sliderDescription}>
              Утонченные сочетания и бархатные оттенки - вот то, что вы искали в
              этом сезоне. Время исследовать.
            </p>

            <div className={styles.toShopWrap}>
              <Arrow
                color={'#6e9c9f'}
                styles={{
                  transform: 'rotate(90deg)',
                }}
              />
              <Link to={'/shop'} className={styles.openShopBtn}>
                Открыть магазин
              </Link>
            </div>
          </div>
          <div className={styles.images}>
            <img src={slideImg1} alt="girl" />
            {/*<img src={slideImg2} alt="girl" className={styles.secondImage} />*/}
            {/*<img src={slideImg3} alt="girl" className={styles.thirdImage} />*/}
          </div>
        </SwiperSlide>
        <div className={'homeSliderPagination'}></div>
      </Swiper>
    </section>
  );
};

export default HomeSlider;
