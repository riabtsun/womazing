import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import styles from './HomeSlider.module.sass';
import './HomeSlider.css';
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Arrow from '../../../Assets/Icons/Arrow';
import slideImg1 from '../../../Assets/Images/Slider1.jpg';
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
            <h1
              className={styles.sliderTitle}
              dangerouslySetInnerHTML={{ __html: t('home.new.title') }}
            />
            <p
              className={styles.sliderDescription}
              dangerouslySetInnerHTML={{ __html: t('home.new.text') }}
            />

            <div className={styles.toShopWrap}>
              <Arrow
                color={'#6e9c9f'}
                styles={{
                  transform: 'rotate(90deg)',
                }}
              />
              <Link
                to={'/shop'}
                className={styles.openShopBtn}
                dangerouslySetInnerHTML={{ __html: t('home.new.btn') }}
              />
            </div>
          </div>
          <div className={styles.images}>
            <img src={slideImg1} alt="girl" />
          </div>
        </SwiperSlide>
        <div className={'homeSliderPagination'}></div>
      </Swiper>
    </section>
  );
};

export default HomeSlider;
