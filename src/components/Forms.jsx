/** @format */

import { useState } from 'react';

function NameForm() {
  const [name, setName] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log('EV::', event);
  }
  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button className="btn btn-primary mt-2">Submit</button>
      </form>
      <p>{name}</p>
    </div>
  );
}
export default NameForm;
