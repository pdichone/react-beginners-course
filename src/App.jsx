/** @format */
import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container pt-2">
      <DataFetching />
    </div>
  );
}
export default App;

function DataFetching() {
  const [data, setData] = useState([]);


  useEffect(() => {
    async function getData() {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const jsonData = await response.json();

      setData(jsonData);
    }

    getData();
  }, []);

  return (
    <div>
      {data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
