const filteredBooks = (books, filter) => (filter !== 'All' ? (books.filter(book => book.category === filter)) : books);

export default filteredBooks;
