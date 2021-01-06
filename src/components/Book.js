import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  id, title, category, handleRemoveBook,
}) => (
  <tr>
    <td>{id}</td>
    <td>{title}</td>
    <td>{category}</td>
    <td>
      <button type="button" onClick={() => handleRemoveBook({ id })}>Remove book</button>
    </td>
  </tr>
);

Book.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  handleRemoveBook: PropTypes.func.isRequired,
};

Book.defaultProps = {
  id: '0',
  title: 'no title',
  category: 'no category',
};

export default Book;
