import React from "react";
import { useState } from "react";

const Counter = () => {
  const [likes, setLikes] = useState(0);

  function increment() {
    setLikes(likes + 1);
  }

  function decrement() {
    setLikes(likes - 1);
  }
  
  return (
    <div>
      <h1>{likes}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decriment</button>
    </div>
  );
};

export default Counter;
