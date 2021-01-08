import React from 'react';
import '../css/Nav.css';
import userIcon from '../images/user.svg';

const Nav = () => (
  <div className="Nav">
    <section>
      <h1>Bookstore CMS</h1>
      <h4>BOOKS</h4>
      <h4>CATEGORIES</h4>
    </section>
    <img src={userIcon} alt="user-icon" />
  </div>
);

export default Nav;
