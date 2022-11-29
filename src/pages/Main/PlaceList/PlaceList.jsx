import React from 'react';
import styles from './PlaceList.module.scss';
import PlaceListItem from './PlaceListItem';
import massive from './massive';

const PlaceList = () => {
  return (
    <div className={styles.listWrapper}>
      {massive
        ? massive.map((listItem, index) => (
            <PlaceListItem
              item={listItem}
              key={listItem.title.toString() + index.toString()}
            />
          ))
        : '3'}
    </div>
  );
};
export default PlaceList;
