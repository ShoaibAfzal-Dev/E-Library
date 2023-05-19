import React, { useState } from 'react'
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import "../Styles/Login.css"
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const loginData=useSelector((e)=>e.cart.Signin)
  const [log,setLog]=useState({
    email:"",
    password:""
  })
  const handlechange=(e)=>{
    setLog({
      ...log,
      [e.target.name]:e.target.value,
      [e.target.name]:e.target.value,
    })
  }
  const submitt=(e)=>{
    e.preventDefault()
  const data=loginData.filter((a)=>{
      return a.email===log.email && a.password===log.password
    })
     if(data.length===1){
      dispatch({
        type:"login"
      })
    navigate("/main-page")
     }
     else{
      alert("dfj hjbd sc ")
     }
  }
  return (
    // <div className="main-login">
    // <div className='Login-page'>
    //   <h1>Login</h1>
    //   <form onSubmit={submitt}>
    //   <input
    //   autoComplete='off'
    //   name='email'
    //   type="email" 
    //   placeholder='Email'
    //   value={log.email}
    //   onChange={handlechange}
    //   />
    //   <input 
    //   autoComplete='off'
    //   name='password'
    //   type="password" 
    //   placeholder='Password'
    //   value={log.password}
    //   onChange={handlechange}
    //   />
    //   <Link to={"/signin"}> <h5>Did you have an account</h5></Link>
    //   <button type="submit">Login</button>
    //   </form>
    // </div>
    // </div>
    <div className="main-login">
  <div className="Login-page">
    <h1>Login</h1>
    <form onSubmit={submitt}>
      <input
        autoComplete="off"
        name="email"
        type="email"
        placeholder="Email"
        value={log.email}
        onChange={handlechange}
      />
      <input
        autoComplete="off"
        name="password"
        type="password"
        placeholder="Password"
        value={log.password}
        onChange={handlechange}
      />
      <Link to={"/signin"}>
        <h5>Don't have an account? Sign Up</h5>
      </Link>
      <button type="submit">Login</button>
    </form>
  </div>
</div>

  )
}

export default Login