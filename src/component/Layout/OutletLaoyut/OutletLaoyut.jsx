import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import SearchIcon from '../../../assets/icons';
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
            <div className={styles.searchInputWrapper}>
              <input placeholder="Найти рестораны" />
              <div className={styles.outletIconWrapper}>
                <SearchIcon />
              </div>
            </div>
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
