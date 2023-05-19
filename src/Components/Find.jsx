import React from 'react'
import { Link } from "react-router-dom"
import "../Styles/Find.css"
const Find = () => {
  return (
    <div className='find-section'>
      <h1>Discover</h1>
      <p>Welcome to our Library's Search Portal! Unlock the gateway to a world of knowledge, imagination, and exploration right at your fingertips. Our powerful search tool is your key to effortlessly accessing our extensive collection of resources.</p>
      <div className="btn">
      <Link to={"/main-page"}><button>Search your books</button></Link> 
      </div>
    </div>
  )
}

export default Find