import '../App.css';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import CategoryFilter from './CategoryFilter';

function App() {
  return (
    <div className="App">
      <BooksForm />
      <CategoryFilter />
      <BooksList />
    </div>
  );
}

export default App;
