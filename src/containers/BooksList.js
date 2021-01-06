import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions/index';
import filteredBooks from '../selectors/filteredBooks';

const BooksList = ({ books, removeBook }) => (
  <div>
    <p>Table with colgroup</p>
    <table>
      <colgroup span="4" />
      <tbody>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
        {books.map(book => <Book key={book.id} book={book} handleRemoveBook={removeBook} />)}
      </tbody>
    </table>
  </div>
);

const mapStateToProps = ({ books, filter }) => ({
  books: filteredBooks(books, filter),
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func.isRequired,
};

BooksList.defaultProps = {
  books: 'no value',
};

export default connect(mapStateToProps, { removeBook })(BooksList);
