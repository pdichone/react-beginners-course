/** @format */
import './App.css';

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
      {books.map((book, index) => (
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

function Book(props) {
  return (
    <div>
      <h2>Title: {props.title}</h2>
      <h3>By {props.author}</h3>
      <p>Description: {props.description}</p>
    </div>
  );
}
