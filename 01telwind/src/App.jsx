import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let object = {
    name: "Sahil",
    age: 20,
    address: "Delhi",

  }

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 roundeed-xl">Telwend</h1>
     
      <Card someobj = {object.name} />
      <Card chandan ="chandan" btnText="clickme" />
      <Card chandan ="Rakesh" btnText="pin me" />
      
          </>
  );
}

export default App;
