import React from 'react';
import styles from './PlaceListItem.module.scss';

const PlaceListItem = ({ item }) => {
  return (
    <div className={styles.plItem}>
      <div className={styles.plItem_imgWrapper}>
        <img src={item.link} alt="none" />
      </div>
      <p className={styles.plItem_title}>{item.title}</p>
      <p className={styles.plItem_subTitle}>4.9 Рекомендуем</p>
    </div>
  );
};
export default PlaceListItem;
