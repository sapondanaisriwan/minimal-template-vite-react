import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto p-5">
      <h1 className="my-4 text-center text-4xl font-bold">Vite + React + TS + Tailwind Template</h1>

      <div className="flex flex-col items-center justify-center">
        <h1 className="my-4 text-2xl">Count is {count}</h1>
        <div>
          <button
            className="m-2 rounded border border-green-500 px-4 py-2 text-center font-semibold text-green-700 hover:border-transparent hover:bg-green-500 hover:text-white"
            onClick={() => setCount((prevCount) => prevCount + 1)}
          >
            Increase
          </button>
          <button
            className="m-2 rounded border border-red-500 px-4 py-2 text-center font-semibold text-red-700 hover:border-transparent hover:bg-red-500 hover:text-white"
            onClick={() => setCount((prevCount) => prevCount - 1)}
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
