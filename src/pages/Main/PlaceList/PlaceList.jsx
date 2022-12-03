import React from 'react';

import { Link } from 'react-router-dom';
import PlaceListItem from './PlaceListItem';
import styles from './PlaceList.module.scss';
import massive from './massive';

const PlaceList = () => {
  return (
    <Link to="/rest">
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
    </Link>
  );
};
export default PlaceList;
