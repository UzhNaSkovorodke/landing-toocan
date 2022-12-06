import React from 'react';
import RestaurantCarousel from './RestaurantCarousel';
import RestaurantForYou from './RestaurantForYou';
import Promotions from './Promotions';

import './Restaurant.scss';

const Restaurant = () => {
  return (
    <div className="restaurantWrapper">
      <RestaurantCarousel />
      <RestaurantForYou category="Рекомендации" />
      <Promotions category="Акция" />
    </div>
  );
};
export default Restaurant;
