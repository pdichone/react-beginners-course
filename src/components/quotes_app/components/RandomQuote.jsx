/** @format */
import React, { useState } from 'react';

function RandomQuote({ quote, color, onChangeQuote}) {
  
  return (
    <div className="container mt-2">
      <div className={`card text-white ${color}`}>
        <div className="card-body">
          <h5 className="card-title">Random Quote</h5>
          <p className="card-text">"{quote.content}"</p>
          <footer className="blockquote-footer text-white">
            {quote.author}
          </footer>
        </div>
        <button className="btn btn-primary mt-3" onClick={onChangeQuote}>
          Get random quote
        </button>
      </div>
    </div>
  );
}
export default RandomQuote;
