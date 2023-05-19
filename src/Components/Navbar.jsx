import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from "react-redux";
import React from 'react'
import "../Styles/Navbar.css"
const Navbar = () => {
  const [url, setUrl] = useState(false)
  const path = window.location.pathname
  useEffect(() => {
    if (path === "/") {
      return setUrl(true)
    }
    else {
      return setUrl(false)
    }
  }, [path])
  console.log("urls", url)

  const dispatch = useDispatch()
  const check = useSelector((d) => d.cart.login)
  const [click, setClick] = useState(false)
  const navigate = () => {
    setClick(!click)
  }
 
  const logoutFun = () => {
    setClick(!click)
    dispatch({
      type: "logout"
    })
  }
  return (
    <div className='navbar'>
      <div className="icon">
        <Link to={"/"}>
          <img src="icon.png" alt="icon" /></Link>
      </div>
      <div className={click ? "sloging" : "loging"}>
        <div className="search-input">
          <Link to={"/main-page"}>
            <label htmlFor="searchInput" className="search-label">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
            </label>
            <input
              disabled
              type="text"
              id="searchInput"
              className="input-field"
              placeholder="Search..."
            />
          </Link>
        </div>

        <Link onClick={navigate} to={"/login"}>Login</Link>
        {check ? <Link onClick={logoutFun} >Logout</Link> :
          <Link onClick={navigate} to={"/signin"}>Signup</Link>}

      </div>
      <div onClick={navigate} className="ham">
        {click ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
      </div>
    </div>
  )
}
export default Navbar