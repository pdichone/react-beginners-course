/** @format */

import { useState } from 'react';

function NameForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    profession: '',
  });
  const [profiles, setProfiles] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Event:::', event.target);
  }
  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <input
            className="form-control"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group mb-3">
          <input
            className="form-control"
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter age"
          />
        </div>

        <div className="form-group mb-3">
          <input
            className="form-control"
            type="text"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            placeholder="Enter profession"
          />
        </div>
        <button className="btn btn-primary mt-2">Submit</button>
      </form>
      {/* <ul>
        {names.map((nameItem, index) => (
          <li key={index} className="list-group-item">
            {nameItem}
          </li>
        ))}
      </ul> */}
    </div>
  );
}
export default NameForm;
