import { REMOVE_BOOK, CREATE_BOOK } from '../actions/actionTypes';

const getRandomIntInclusive = (lower, upper) => {
  const min = Math.ceil(lower);
  const max = Math.floor(upper);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const findAndDeleteBook = (books, id) => books.filter(book => book.id !== id);

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK: {
      const { book } = action;
      book.id = getRandomIntInclusive(1, 100).toString();
      return [
        ...state,
        book,
      ];
    }
    case REMOVE_BOOK: {
      const { book } = action;
      const books = [...state];
      return findAndDeleteBook(books, book.id);
    }
    default:
      return state;
  }
};

export default booksReducer;
