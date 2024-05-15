/** @format */

import { useState } from 'react';

function Book({ title, author, description, subtitle, image }) {
  const [isRead, setIsRead] = useState(false);

  return (
    <div className="user-profile">
      <img src={image} alt={title} />
      <h2>Title: {title}</h2>
      <h4>Subtitle: {subtitle}</h4>
      <h3>By {author}</h3>
      <p>Description: {description}</p>
      <button onClick={() => setIsRead(!isRead)}>
        {isRead ? 'Read' : 'Unread'}
      </button>
    </div>
  );
}
export default Book;
