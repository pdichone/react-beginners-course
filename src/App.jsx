/** @format */
import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container pt-2">
      <AdjustableTimer />
    </div>
  );
}
export default App;

function AdjustableTimer() {
  const [seconds, setSeconds] = useState(0);
  const [intervalMs, setIntervalMs] = useState(1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [intervalMs]);

  return (
    <div>
      <div>Seconds: {seconds}</div>
      <input
        type="number"
        value={intervalMs}
        onChange={(e) => setIntervalMs(Number(e.target.value))}
      />

      <label> Adjust interval (ms)</label>
    </div>
  );
}

// function DataFetching({ data, isLoading }) {
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       {data.map((post) => (
//         <div key={post.id}>{post.title}</div>
//       ))}
//     </div>
//   );
// }

/**
 * const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const jsonData = await response.json();

      setData(jsonData);
      setIsLoading(false);
    }

    getData();
  }, []);
 */
