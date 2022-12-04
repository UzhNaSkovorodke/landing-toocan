import React from 'react';
// import Modal from '../../component/Modal';

import PlaceList from './PlaceList';

const Main = () => {
  return (
    <>
      <h1>Рестораны</h1>
      <PlaceList category="Тихое место" />
      <PlaceList category="Недавно открылись" />
      <PlaceList category="Азиатская кухня" />
      <PlaceList category="Прочее" />
    </>
  );
};
export default Main;
