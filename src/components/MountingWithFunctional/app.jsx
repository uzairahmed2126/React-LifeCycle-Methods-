import React, { useEffect, useState } from "react";

export default function MountingWithFunctional() {
  const [count, setCount] = useState(0);

  //work on component did  mount
  useEffect(() => {
    console.log("Component is Mount");
  }, []);

  //work on component did update
  useEffect(() => {
    console.log("Mounting on count");
  }, [count]);

  function handleCount() {
    setCount((prev) => prev + 1);
  }
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={handleCount}>count</button>
    </div>
  );
}
