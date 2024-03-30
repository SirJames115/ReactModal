import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className="container">
        {/* <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div> */}
        <h1>Vite + React</h1>
        <div className="card">
          {/* <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button> */}
        </div>
        <button onClick={() => setModal((prev) => !prev)}>Open Modal</button>
        {modal && (
          <div className="modal">
            <h2 className="modal-content">Modal is true</h2>
            <button onClick={() => setModal((prev) => !prev)}>
              Close Modal
            </button>
          </div>
        )}
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <p className="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          cupiditate culpa ipsum fugiat laboriosam officiis soluta eaque fuga
          est neque repellendus, qui voluptatem! Fugit reprehenderit animi nihil
          explicabo cum quod!
        </p>
        <p className="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          cupiditate culpa ipsum fugiat laboriosam officiis soluta eaque fuga
          est neque repellendus, qui voluptatem! Fugit reprehenderit animi nihil
          explicabo cum quod!
        </p>
      </div>
    </>
  );
}

export default App;
