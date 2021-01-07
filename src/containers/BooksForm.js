import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BOOK_CATEGORIES from '../constants';
import { createBook } from '../actions/index';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', category: '--Please choose a category--' };
  }

    handleChange = ({ target: { name, value } }) => {
      this.setState({
        [name]: value,
      });
    }

    handleCreateBook = e => {
      e.preventDefault();
      // dispatches actions to add or remove a book
      const { props: { createBook } } = this;
      const { state: { title, category } } = this;
      createBook({ title, category });
      // sets state back to initial values
      this.setState({ title: '', category: '' });
    };

    render() {
      const { state: { title, category } } = this;
      return (
        <form className="form" onSubmit={this.handleCreateBook}>

          <input
            placeholder="title"
            name="title"
            onChange={this.handleChange}
            value={title}
          />
          <label htmlFor="book-select">
            Choose a category:
            <select
              name="category"
              id="book-select"
              value={category}
              onChange={this.handleChange}
            >
              {BOOK_CATEGORIES.map(option => (
                <option key={option}>
                  {option === '' ? '--Please choose a category--' : option}
                </option>
              ))}
              ;
            </select>
          </label>
          <div className="submitBtn">
            <button
              type="submit"
              className="submit"
            >
              Add Book
            </button>
          </div>
        </form>
      );
    }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(
  null,
  { createBook },
)(BooksForm);
