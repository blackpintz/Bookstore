import '../App.css';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <BooksForm />
      <BooksList />
    </div>
  );
}

export default App;
