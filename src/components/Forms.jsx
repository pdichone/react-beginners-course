/** @format */

function NameForm() {
  return (
    <div className="container mt-4">
      <form onSubmit={(event) => {
        event.preventDefault()
         console.log('Hello')
      }}>
        <input
          className="form-control"
          type="text"
          placeholder="Enter your name"
        />
        <button className="btn btn-primary mt-2">Submit</button>
      </form>
    </div>
  );
}
export default NameForm;
