import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BOOK_CATEGORIES from '../constants';

const CategoryFilter = ({ filter }) => (
  <div>
    <select
      value={filter.filter}
    >
      {BOOK_CATEGORIES.map(option => (
        <option key={option}>
          {option === '' ? filter.filter : option}
        </option>
      ))}
    </select>
  </div>
);

const mapStateToProps = state => ({
  filter: state.filter,
});

CategoryFilter.propTypes = {
  filter: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(CategoryFilter);
