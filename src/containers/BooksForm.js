import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BOOK_CATEGORIES from '../constants';
import { createBook } from '../actions/index';
import '../css/BooksForm.css';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', category: BOOK_CATEGORIES[0] };
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
      this.setState({ title: '', category: BOOK_CATEGORIES[0] });
    };

    render() {
      const { state: { title, category } } = this;
      return (
        <div className="BooksForm">
          <h1>ADD NEW BOOK</h1>
          <form className="form" onSubmit={this.handleCreateBook}>

            <input
              placeholder="Book title"
              name="title"
              className="input-title"
              onChange={this.handleChange}
              value={title}
            />
            <div className="custom-select">
              <select
                name="category"
                value={category}
                onChange={this.handleChange}
              >
                {BOOK_CATEGORIES.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
                ;
              </select>
              <span className="custom-arrow" />
            </div>
            <button
              type="submit"
              className="submit"
            >
              ADD BOOK
            </button>
          </form>
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
