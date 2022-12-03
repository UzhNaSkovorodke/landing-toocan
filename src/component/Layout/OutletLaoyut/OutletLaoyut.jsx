import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './OutletLaoyut.module.scss';

const OutletLaoyut = () => {
  return (
    <>
      <div className={styles.OutletWrapper}>
        <nav>
          <div className={styles.firstNavSection}>
            <Link to="/">
              <div className={styles.logo}>Toocan</div>
            </Link>
            <input placeholder="Найти рестораны" />
            <input placeholder="Укажите свой адресс" />
          </div>
          <div className={styles.secondNavSection}>
            <button type="button">Русский</button>
            <button type="submit">Войти</button>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
};
export default OutletLaoyut;
