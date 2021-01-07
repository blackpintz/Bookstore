import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BOOK_CATEGORIES from '../constants';
import { changeFilter } from '../actions/index';

const bookCategories = ['All', ...BOOK_CATEGORIES];

const CategoryFilter = ({ handleFilterChange }) => (
  <div>
    <select
      onChange={e => handleFilterChange(e.target.value)}
    >
      {bookCategories.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default connect(null, { handleFilterChange: changeFilter })(CategoryFilter);
