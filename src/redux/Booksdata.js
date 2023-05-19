import { createReducer } from "@reduxjs/toolkit";
import { getBooksList } from "./Thunk";
import { getSingleBook ,getSeriessList,getSingleGroupData} from "./Thunk";
export const booksdata =createReducer({
 BooksList:"",
 ListLoading:false,
 BookLoading:false,
 groupLoading:false,
 SingleBook:"",
 GroupsList:"",
 groupData:""
},{
    [getBooksList.pending]:(state)=>{
  try {
    state.ListLoading=true
  } catch (error) {
    return error.message
  }
    },
    [getBooksList.fulfilled]:(state,action)=>{
        try {
            state.SingleBook=""
            state.groupData=""
            state.GroupsList=""
            state.BooksList=action.payload
            state.ListLoading=false
        } catch (error) {
            return error.message
        }
    },
    [getSingleBook.pending]:(state,action)=>{
   try {
    state.BookLoading=true
   } catch (error) {
    return error.message
   }
    },
    [getSingleBook.fulfilled]:(state,action)=>{
     try {
        state.GroupsList=""
        state.groupData=""
        state.BooksList=""
        state.BookLoading=false
        state.SingleBook=action.payload
     } catch (error) {
        return error.message
     }
    },
    [getSeriessList.pending]:(state,action)=>{
        try {
            state.ListLoading=true;
        } catch (error) {
            return error.message
        }
    },
    [getSeriessList.fulfilled]:(state,action)=>{
        try {
            state.SingleBook=""
            state.groupData=""
            state.BooksList=""
            state.GroupsList=action.payload
            state.ListLoading=false
        } catch (error) {
            return error.message
        }
    },[getSingleGroupData.pending]:(state)=>{
        try {
            
      state.groupLoading=true
        } catch (error) {
            return error.message
        }


    },
    [getSingleGroupData.fulfilled]:(state,action)=>{
        try {
            state.SingleBook=""
            state.GroupsList=""
            state.BooksList=""
            state.groupLoading=false
            state.groupData=action.payload
              } catch (error) {
                  return error.message
              }
    }

})