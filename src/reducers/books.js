import { REMOVE_BOOK, CREATE_BOOK } from '../actions/actionTypes';

const findAndDeleteBook = (books, id) => books.filter(book => book.id !== id);

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK: {
      return [
        ...state,
        action.book,
      ];
    }
    case REMOVE_BOOK: {
      const { book } = action.book;
      const books = [...state];
      return findAndDeleteBook(books, book.id);
    }
    default:
      return state;
  }
};

export default booksReducer;
