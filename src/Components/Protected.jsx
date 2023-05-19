import React from 'react'
import { useSelector } from 'react-redux'
import Login from './Login'

const Protected = (props) => {
    const {Component}=props
    const log=useSelector((s)=>s.cart.login)
  return (
    <div>
        {log?<Component/>:<Login/>}
        
    </div>
  )
}

export default Protected