import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = props => {
  const { books } = props;
  return (
    <div>
      <p>Table with colgroup</p>
      <table>
        <colgroup span="4" />
        <tbody>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
          {books.map(book => <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />)}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  books: state.books,
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
};

BooksList.defaultProps = {
  books: 'no value',
};

export default connect(mapStateToProps)(BooksList);
