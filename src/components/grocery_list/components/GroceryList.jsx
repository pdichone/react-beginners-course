/** @format */
import { ArrowRight } from 'react-bootstrap-icons';

function GroceryList({ items }) {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.id}
          className="card mb-2 p-2 d-flex justify-content-between align-center"
        >
          <div className="d-flex align-items-center">
            <div
              style={{ height: '20px', width: '20px' }}
              className="rounded-circle me-2 bg-success"
            ></div>

            <span>
              <p className="display-6 pt-2">{item.text}</p>
            </span>
            <button className="btn btn-danger ms-5">
              <i class="bi bi-trash"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GroceryList;
