import { useState } from "react";
import "./App.css";
import MountingWithClass from "./components/MountingWithClass/app";
import MountingWithFunctional from "./components/MountingWithFunctional/app";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <MountingWithClass /> */}
      <MountingWithFunctional />
    </>
  );
}

export default App;
