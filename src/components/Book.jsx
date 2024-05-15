/** @format */

function Book({ title, author, description, subtitle, image }) {
  var isRead = false;

  return (
    <div className="user-profile">
      <img src={image} alt={title} />
      <h2>Title: {title}</h2>
      <h4>Subtitle: {subtitle}</h4>
      <h3>By {author}</h3>
      <p>Description: {description}</p>
      <button
        onClick={() => {
          isRead = !isRead;
          console.log('Status', isRead);
        }}
      >
        {isRead ? 'Read' : 'Unread'}
      </button>
    </div>
  );
}
export default Book;
