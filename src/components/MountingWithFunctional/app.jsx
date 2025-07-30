import React, { useEffect, useState } from "react";

// component mounting
export default function MountingWithFunctional() {
  const [count, setCount] = useState(0);

  //work on component did  mount
  useEffect(() => {
    console.log("Component is Mount");
  }, []);

  //work on component did update
  useEffect(() => {
    console.log("Mounting on count");
    return () => {
      console.log("Unmounting cleanup"); //component will unmount
    };
  }, [count]);

  function handleCount() {
    setCount((prev) => prev + 1);
  }

  // this is render phase and it is work last and it is only used to render the JSX
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={handleCount}>count</button>
    </div>
  );
}
