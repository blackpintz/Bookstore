import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

// class BooksList extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {

//   }
// }
const BooksList = ({ books, dispatch }) => {
  const handleRemoveBook = book => {
    dispatch(removeBook(book));
  };
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
            <th>Action</th>
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
  dispatch: PropTypes.func.isRequired,
};

BooksList.defaultProps = {
  books: 'no value',
};

export default connect(mapStateToProps)(BooksList);
