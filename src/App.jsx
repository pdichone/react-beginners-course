/** @format */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import GroceryList from './components/grocery_list/components/GroceryList';

function App() {
  const groceries = [
    { id: Date.now(), text: 'Bananas', bought: false },
    { id: Date.now(), text: 'Pear', bought: false },
    { id: Date.now(), text: 'Apple', bought: false },
  ];
  return (
    <div className="container pt-2">
      <GroceryList items={groceries} />
    </div>
  );
}
export default App;
