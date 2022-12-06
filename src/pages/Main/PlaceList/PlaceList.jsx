import React from 'react';

import PlaceListItem from './PlaceListItem';

import styles from './PlaceList.module.scss';
import massive from '../../../store/massive';

const PlaceList = ({ category }) => {
  return (
    <div className={styles.placeList}>
      <h2>{category}</h2>
      <div className={styles.listWrapper}>
        {massive
          ? massive.map((listItem, index) =>
              listItem.category === category ? (
                <PlaceListItem
                  item={listItem}
                  key={listItem.title.toString() + index.toString()}
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
export default PlaceList;
