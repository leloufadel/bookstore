import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavPage.module.css';

const NavPage = () => (
  <header className={classes.headerContainer}>
    <nav className={classes.navList}>
      <h2 className={classes.Logo}>Bookstore CMS</h2>
      <ul>
        <li>
          <NavLink to="/">BOOKS</NavLink>
        </li>
        <li>
          <NavLink to="/categories">CATEGORIES</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default NavPage;
