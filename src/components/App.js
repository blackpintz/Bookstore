import '../css/App.css';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import Nav from './Nav';

function App() {
  return (
    <div className="content">
      <Nav />
      <div>
        <BooksList />
        <BooksForm />
      </div>
    </div>
  );
}

export default App;
