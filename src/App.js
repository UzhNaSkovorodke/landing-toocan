import React from 'react';
import './App.module.scss';
import Find from './component/Find';

function App() {
  return (
    <div>
      <header>
        <h1>Система брони</h1>
      </header>
      <main>
        <Find />
        <div>Меню</div>
        <div>Забронировать</div>
      </main>
      <footer>все зарегано</footer>
    </div>
  );
}

export default App;
