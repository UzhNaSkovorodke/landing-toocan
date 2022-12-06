import React from 'react';
import Dish from '../../../component/Dish/Dish';
import dishList from '../../../store/dishList';

import styles from './Promotions.module.scss';

const Promotions = ({ category }) => {
  return (
    <div className={styles.promotionsWrapper}>
      <h2>Акции</h2>
      <div className={styles.promoCarousel}>
        {dishList
          ? dishList.map((dishItem, index) =>
              dishItem.category === category ? (
                <Dish
                  item={dishItem}
                  key={dishItem.title.toString() + index.toString()}
                />
              ) : (
                ''
              )
            )
          : ' '}
      </div>
    </div>
  );
};
export default Promotions;
