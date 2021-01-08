const filteredBooks = (books, filter) => (filter !== 'All' && filter !== 'CATEGORIES' ? (books.filter(book => book.category === filter)) : books);

export default filteredBooks;
