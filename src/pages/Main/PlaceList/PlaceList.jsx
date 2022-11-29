import React from 'react';
import styles from './PlaceList.module.scss';
import PlaceListItem from './PlaceListItem';

const PlaceList = () => {
  const massive = [
    { title: 'sushi' },
    { title: 'notSushi' },
    { title: 'hardSushi' },
    { title: 'superSushi' },
    { title: 'megaSushi' },
    { title: 'lightSushi' },
    { title: 'chinese' },
    { title: 'chinese' },
    { title: 'megaSushi' },
    { title: 'hardSushi' },
  ];
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
