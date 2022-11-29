import React from 'react';
import styles from './PlaceListItem.module.scss';

const PlaceListItem = ({ item }) => {
  return (
    <div className={styles.plItem}>
      <div className={styles.plItem_imgWrapper}>
        <img
          src="https://eda.yandex/images/3106738/cd7d82751efb7e214cc28581ce373323-450x300.jpg"
          alt="none"
        />
      </div>
      <p>{item.title}</p>
      <div>4.9 Рекомендуем</div>
    </div>
  );
};
export default PlaceListItem;
