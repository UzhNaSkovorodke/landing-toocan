import React from 'react';
import { Routes, Route } from 'react-router-dom';
import OutletLaoyut from '../component/Layout/OutletLaoyut';
import Main from '../pages/Main';
import Restaurant from '../pages/Restaurant';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<OutletLaoyut />}>
      <Route index element={<Main />} />
      <Route path="rest" element={<Restaurant />} />
    </Route>
  </Routes>
);

export default AppRouter;
