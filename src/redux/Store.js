import {combineReducers} from "redux"
import {configureStore} from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import { users } from "./Data"
import { booksdata } from "./Booksdata"
const reducers=combineReducers({
    cart:users,
    books:booksdata
})
export const Store =configureStore({
 reducer:reducers,
 middleware:[thunk]
})