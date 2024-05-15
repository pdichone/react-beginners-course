/** @format */

function DecrementButton({ onDecrement }) {
  return (
    <div>
      <button onClick={onDecrement} className="btn btn-danger">
        Decrement
      </button>
    </div>
  );
}
export default DecrementButton;
