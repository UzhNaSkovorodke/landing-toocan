import React from 'react';
import styles from './Dish.module.scss';

const Dish = ({ item }) => {
  return (
    <div className={styles.dishWrapper}>
      <div className={styles.dishImgWrapper}>
        <img src={item.link} alt="none" />
      </div>
      <div className={styles.dishText}>
        <p className={styles.dishPrice}>{item.price}</p>
        <p className={styles.dishTitle}>{item.title}</p>
        <p className={styles.dishWeight}>{item.weight}</p>
      </div>
      <div className={styles.dButtonWrapper}>
        <button type="button">+ Добавить</button>
      </div>
    </div>
  );
};
export default Dish;
