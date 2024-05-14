/** @format */
import './App.css';

function App() {
  const bookName = 'Effective Java';
  const author = 'Kathy Sierra';
  const description = 'A great book about Java.';

  return (
    <div className="App">
      <Book title={bookName} author={author} description={description} />
    </div>
  );
}
export default App;

function Book(props) {
  console.log(props);
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>By {props.author}</h3>
      <p>{props.description}</p>
    </div>
  );
}
