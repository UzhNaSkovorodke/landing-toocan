import React from 'react';
import { Link } from 'react-router-dom';

import styles from './PlaceListItem.module.scss';

const PlaceListItem = ({ item }) => {
  return (
    <div className={styles.plItem}>
      <Link to="/rest">
        <div className={styles.plItem_imgWrapper}>
          <img src={item.link} alt="none" />
        </div>
        <p className={styles.plItem_title}>{item.title}</p>
        <p className={styles.plItem_subTitle}>
          {item.raiting}
          {item.raiting > 4.6 ? ' Рекомендуем' : ' Хорошие отзывы'}
        </p>
      </Link>
    </div>
  );
};
export default PlaceListItem;
