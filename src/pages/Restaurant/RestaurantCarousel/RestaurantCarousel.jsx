import React from 'react';

import styles from './RestaurantCarousel.module.scss';
import massive from '../../../store/massive';

const RestaurantCarousel = () => {
  return (
    <div className={styles.carouselWrapper}>
      <img className={styles.imgFirstChild} src={massive[0].link} alt="none" />
      <img src={massive[0].linkAlt1} alt="none" />
      <img
        className={styles.imgLastChild}
        src={massive[0].linkAlt2}
        alt="none"
      />
    </div>
  );
};
export default RestaurantCarousel;
