import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ id, title, category }) => (
  <div>
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  </div>
);

Book.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  category: PropTypes.string,
};

Book.defaultProps = {
  id: 0,
  title: 'no title',
  category: 'no category',
};

export default Book;
