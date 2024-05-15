/** @format */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import NameForm from './components/Forms';

function App() {
  return (
    <div className="container pt-2">
      <NameForm />
    </div>
  );
}
export default App;
