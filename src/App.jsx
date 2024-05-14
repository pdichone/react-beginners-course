/** @format */
import './App.css';
import Book from './components/Book';
import UserProfile from './components/UserProfile';

function App() {
  const books = [
    {
      id: 1,
      title: '1984',
      author: 'George Orwell',
      description: 'A dystopian novel.',
    },
    {
      id: 2,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      description: 'A novel set in the Jazz Age.',
    },
  ];

  return (
    <div className="App">
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          description={book.description}
        />
      ))}
    </div>
  );
}
export default App;
