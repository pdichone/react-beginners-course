/** @format */

function Book({ title, author, description }) {
  return (
    <div>
      <h2>Title: {title}</h2>
      <h3>By {author}</h3>
      <p>Description: {description}</p>
    </div>
  );
}
export default Book;
