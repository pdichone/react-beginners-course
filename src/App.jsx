/** @format */
import './App.css';
import Book from './components/Book';
import { booksData } from './components/data';
import RandomQuote from './components/quotes_app/components/RandomQuote';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [quote, setQuote] = useState('');
  const [color, setColor] = useState('bg-dark');

  const quotes = [
    {
      author: 'Albert Einstein',
      content:
        'Life is like riding a bicycle. To keep your balance, you must keep moving.',
    },
    {
      author: 'Isaac Newton',
      content:
        'If I have seen further it is by standing on the shoulders of Giants.',
    },
    {
      author: 'Marie Curie',
      content: 'Be less curious about people and more curious about ideas.',
    },
    {
      author: 'Leonardo da Vinci',
      content: 'Learning never exhausts the mind.',
    },
    {
      author: 'Aristotle',
      content: "The more you know, the more you realize you don't know.",
    },
  ];
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

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
    setColor(getRandomColor());
  }

  function getRandomColor() {
    const colors = [
      'bg-primary',
      'bg-secondary',
      'bg-success',
      'bg-danger',
      'bg-warning',
      'bg-info',
      //   'bg-light',
      'bg-dark',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }
  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }
  return (
    <div className="container pt-2">
      <p>Count: {count} </p>
      <IncrementButton onIncrement={increment} />
      <DecrementButton onDecrement={decrement} />
      {/* <RandomQuote quote={quote} color={color} onChangeQuote={getRandomQuote} /> */}
    </div>
  );
}
export default App;

function IncrementButton({ onIncrement }) {
  return (
    <div>
      <button onClick={onIncrement} className="btn btn-success">
        Increment
      </button>
    </div>
  );
}
function DecrementButton({ onDecrement }) {
  return (
    <div>
      <button onClick={onDecrement} className="btn btn-danger">
        Decrement
      </button>
    </div>
  );
}
