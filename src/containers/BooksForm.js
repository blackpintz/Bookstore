import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BOOK_CATEGORIES from '../constants';
import { createBook } from '../actions/index';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', category: '' };
    this.updateCategory = this.updateCategory.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

    updateTitle = title => {
      this.setState({ title });
    };

    updateCategory = category => {
      this.setState({ category });
    };

    handleCreateBook = () => {
      // dispatches actions to add or remove a book
      const { props: { createBook } } = this;
      const { state: { title, category } } = this;
      createBook({title, category});
      // sets state back to initial values
      this.setState({ title: '', category: '' });
    };

    render() {
      const { state: { title } } = this;
      return (
        <div>
          <input
            onChange={e => this.updateTitle(e.target.value)}
            value={title}
          />
          <label htmlFor="book-select">
            Choose a category:
            <select
              name="book-categories"
              id="book-select"
              onChange={e => this.updateCategory(e.target.value)}
            >
              <option>--Please choose a category--</option>
              {BOOK_CATEGORIES.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
              ;
            </select>
          </label>
          <div className="submitBtn">
            <button
              type="button"
              className="submit"
              onClick={this.handleCreateBook}
            >
              Add Book
            </button>
          </div>
        </div>
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
