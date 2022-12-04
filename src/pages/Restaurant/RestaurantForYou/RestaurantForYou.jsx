import React from 'react';

import styles from './RestaurantForYou.module.scss';

import dishList from '../../../store/dishList';
import Dish from '../../../component/Dish/Dish';

const RestaurantForYou = ({ category }) => {
  return (
    // ком разобраться со стилями (они с другого компонента)
    <div className={styles.promotionsWrapper}>
      <h2>Рекомендация для вас</h2>
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
export default RestaurantForYou;
