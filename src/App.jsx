/** @format */
import './App.css';
import Book from './components/Book';
import { booksData } from './components/data';
import RandomQuote from './components/quotes_app/components/RandomQuote';
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
      <RandomQuote />
      {/* {booksData.items.map((book, index) => (
        <Book
          key={index}
          title={book.volume.title}
          author={book.volume.authors}
          description={book.volume.description}
          subtitle={book.volume.subtitle}
          image={book.volume.image}
        />
      ))} */}
    </div>
  );
}
export default App;
