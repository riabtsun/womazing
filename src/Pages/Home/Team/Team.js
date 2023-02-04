import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import barbers from '../../../Assets/Images/Home/Team/barbers.jpg';
import './TeamSlider.css';
import styles from './Team.module.sass';
import 'swiper/css/scrollbar';
import Arrow from '../../../Assets/Icons/Arrow';
import { Link } from 'react-router-dom';

const Team = () => {
  return (
    <section>
      <h2 className={styles.teamTitle}>Команда мечты Womazing</h2>
      <div className={styles.content}>
        <div className="teamSlider">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              nextEl: '.team-swiper-button-next',
              prevEl: '.team-swiper-button-prev',
              disabledClass: 'swiper-button-disabled',
            }}
            loop={true}
            autoplay={false}
            pagination={{ el: '.teamSliderPagination', clickable: true }}
          >
            <SwiperSlide>
              <img className={'teamSliderImg'} src={barbers} alt="barbers" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={'teamSliderImg'} src={barbers} alt="barbers" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={'teamSliderImg'} src={barbers} alt="barbers" />
            </SwiperSlide>
          </Swiper>
          <div className="team-swiper-button-prev">
            <Arrow styles={{ transform: 'rotate(180deg)' }} color={'#858585'} />
          </div>
          <div className="team-swiper-button-next">
            <Arrow color={'#858585'} />
          </div>
          <div className="teamSliderPagination"></div>
        </div>
        <div className={styles.teamAbout}>
          <h3 className={styles.teamAboutTitle}>Для каждой</h3>
          <p className={styles.teamAboutText}>
            Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.
            Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно
            подчеркивают достоинства каждой девушки.
          </p>
          <Link className={styles.teamAboutLink} to={'/about'}>
            Подробнее о бренде
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;
