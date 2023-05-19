import { createReducer } from "@reduxjs/toolkit";
export const users =createReducer({
    Signin:[],
    login:false
},{
    signup:(state,action)=>{
        state.Signin.push(action.payload)
    },
    login:(state)=>{
       state.login=true
    },
    logout:(state)=>{
        state.login=false
    }
})