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
      <UserProfile
        name="John Doe"
        email="john.doe@email.com"
        bio="React Dev @ Tech Co."
      />
      {/* {books.map((book, index) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          description={book.description}
        />
      ))} */}
    </div>
  );
}
export default App;

function Book({ title, author, description }) {
  return (
    <div>
      <h2>Title: {title}</h2>
      <h3>By {author}</h3>
      <p>Description: {description}</p>
    </div>
  );
}

function UserProfile({ name, email, bio }) {
  return (
    <div className="user-profile">
      <h1>{name}</h1>
      <p>Email: {email}</p>
      <p>Bio: {bio}</p>
    </div>
  );
}
