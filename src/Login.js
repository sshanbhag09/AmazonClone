import React,{useState} from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { auth } from "./firebase";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email,setEmail]=useState('');
  const [password,setPassword]= useState('');
  const signIn=e=>{
    e.preventDefault();
  }
  const register=e=>
  {
    e.preventDefault();
    
    createUserWithEmailAndPassword(auth,email,password)
    .then((auth)=>{
      console.log(auth);
    })
    .catch(error =>alert(error.message))

  }
  return (
    

    <div class="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-In</h1>
        <form>
          <h5>Email</h5>
          <input type="text"  value={email} onChange=
          {e =>setEmail(e.target.value)}/>

          <h5>Password</h5>
          <input type="password" value={password}
          onChange={e=>setPassword(e.target.value)} />

          <button type="submit" class="login_signInButton" onClick={signIn}>Sign In</button>
        </form>
        <p>
          
          By signing to you agree to terms and conditions of our amazon fake
          clone
        </p>
        <button className="login_registerButton" onClick={register}>Create a new Account</button>
      </div>
    </div>
  );
}

export default Login;
