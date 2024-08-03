import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
//import { preview } from 'vite'

function App() {
  const [length, setLength] = useState(6);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setcharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqurstuvwx";
    if (numberAllow) str += "0123456789";
    if (charAllow) str += "~!@#$%^&*()_+{}";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllow, charAllow]);

  const copypasswordref = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);
  const rendom = (rendom) => {
    const num = "123456";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * num.length);
      pass = str.charAt(char);
    }
  };
  // useEffect(() =>{
  //     passwordGenerator()
  //   }, [length, numberAllow, charAllow, passwordGenerator]
  // );

  return (
    <>
      <div className="W-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8  text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-4 ">Password Genetator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />

          <button
            onClick={copypasswordref}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 "
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1">
            <input
              type="range"
              min={6}
              max={40}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />

            <label>Length:{length}</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllow}
              id="numberInput"
              onChange={() => {
                setNumberAllow((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id="charInput"
              onChange={() => {
                setcharAllow((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">char</label>
          </div>
        </div>
      </div>
      <div className="flex item-center gap-x-1 mx-52 ">{rendom}</div>
    </>
  );
}

export default App;
