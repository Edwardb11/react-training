import React from "react";
import Buttons from "./components/Buttons";

const App = () => {
  return (
    <div>
      <h1 className="title">Hello World</h1>
      <hr />

      <ul>
        <li>
          <a href="https://reactjs.org/">React</a>
        </li>
        <li>
          <a href="https://nextjs.org/">Next.js</a>
        </li>
        <li>
          <a href="https://sass-lang.com/">Sass</a>
        </li>
        <li>
          <a href="https://tailwindcss.com/">Tailwind CSS</a>
        </li>
      </ul>
      <hr />
      <h2>Counter :0</h2>
      <Buttons type="btn " text="+1" />
      <Buttons type="btn btn-primary " text="-1" />
      <Buttons type="btn btn-secondary " text="-1" />
    </div>
  );
};

export default App;
