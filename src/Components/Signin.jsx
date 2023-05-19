import React, { useState } from 'react'
import "../Styles/Signin.css"
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux"
const Signin = () => {
  const dispatch=useDispatch();
  const navigate = useNavigate();
    const [sinup ,setSignup]=useState({
    username:"",
    email:"",
    password:""
  })
  const handlechange=(e)=>{
   e.preventDefault();
   setSignup({
    ...sinup,
    [e.target.name]:e.target.value,
    [e.target.name]:e.target.value,
    [e.target.name]:e.target.value
   })
  }
  const submittdata=(e)=>{
    e.preventDefault();
    console.log(sinup)
    dispatch({
      type:"signup",
      payload:sinup
    })
    navigate('/login');
  }
 console.log(process.env)
  return (
  <div className="singuppage">
    <div className="Signin-page">
    <h1>Sign Up</h1>
    <form onSubmit={submittdata}>
      <input
        required
        type="text"
        autoComplete="off"
        name="username"
        onChange={handlechange}
        value={sinup.username}
        placeholder="Enter Username"
      />
      <input
        required
        autoComplete="off"
        type="email"
        name="email"
        onChange={handlechange}
        value={sinup.email}
        placeholder="Enter Email"
      />
      <input
        required
        autoComplete="off"
        name="password"
        onChange={handlechange}
        value={sinup.password}
        type="password"
        placeholder="Enter Password"
      />
  
      <button type="submit">Sign Up</button>
    </form>
  </div>
  
  </div>
    )
}

export default Signin