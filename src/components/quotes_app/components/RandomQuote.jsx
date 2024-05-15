/** @format */
import React, { useState } from 'react';

function RandomQuote() {
  const [quote, setQuote] = useState('');

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

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }
  return (
    <div>
      <div className="user-profile">
        <div>
          <h5>Random Quote</h5>
          <p>"{quote.content}"</p>
          <i>Author: {quote.author}</i>
        </div>
        <button onClick={getRandomQuote}>Get random quote</button>
      </div>
    </div>
  );
}
export default RandomQuote;
