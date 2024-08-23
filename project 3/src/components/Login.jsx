import React, {useContext , useState} from "react";
import Usercontext from "../context/Usecontext";

function Login() {
const [username, setusername] = useState("")
const [password, setpassword] = useState("")

const {setuser } =  useContext(Usercontext)

const Handalsubmit =    (e) => { 
    e.preventDefault()
    setuser({username, password})
}

  return (
    <div>
      <h2>Login </h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setusername(e.target.value)} /> {"  "}
      <input type="text" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} />

      <button onClick={Handalsubmit}>Submit</button>
    </div>
  )
}

export default Login
