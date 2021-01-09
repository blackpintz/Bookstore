import React from 'react';
import '../css/Nav.css';
import userIcon from '../images/user.svg';
import CategoryFilter from './CategoryFilter';

const Nav = () => (
  <div className="Nav">
    <section>
      <h1>Bookstore CMS</h1>
      <h4>BOOKS</h4>
      <CategoryFilter />
    </section>
    <img src={userIcon} alt="user-icon" />
  </div>
);

export default Nav;
