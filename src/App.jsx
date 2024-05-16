/** @format */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import GroceryList from './components/grocery_list/components/GroceryList';
import GroceryNav from './components/grocery_list/components/GroceryNav';
import GroceryFooter from './components/grocery_list/components/GroceryFooter';
import GroceryForm from './components/grocery_list/components/GroceryForm';

function App() {
  const [groceriesItems, setGroceriesItems] = useState([]);
  const [groceryInput, setGroceryInput] = useState('');

  function handleOnChange(e) {
    setGroceryInput(e.target.value);
  }
  function handleOnSubmit(e) {
    e.preventDefault();

    if (!groceryInput.trim()) return;
    const newGrocery = {
      id: Date.now(),
      text: groceryInput,
      bought: false,
    };

    setGroceriesItems([newGrocery, ...groceriesItems]);
    setGroceryInput('');
  }
  function toggleBought(id) {
    console.log('Toggling item', id);
  }

  return (
    <div className="container pt-2">
      <GroceryNav />
      <GroceryForm
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        item={groceryInput}
      />
      <GroceryList items={groceriesItems} handleOnToggle={toggleBought} />
      <GroceryFooter />
    </div>
  );
}
export default App;
