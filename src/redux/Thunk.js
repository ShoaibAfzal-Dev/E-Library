import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import xmlJs from "xml-js"
export const getBooksList=createAsyncThunk("getBooksList",async (value)=>{
    try {
        const {data}=await axios
        .get(`${process.env.REACT_APP_FIRST_URL}&q=${value}`)
    const json = xmlJs.xml2json(data, { compact: true, spaces: 2 });

    const result=JSON.parse(json)

    console.log("result.GoodreadsResponse",result)
    return result.GoodreadsResponse.search.results.work
        // }
    } catch (error) {
        return error.message
    }
})
export const getSingleBook=createAsyncThunk("GetSingleBook",async (id)=>{
    try {

        const {data}=await axios
        .get(`${process.env.REACT_APP_SECOND_URL}&id=${id}`)
    const json = xmlJs.xml2json(data, { compact: true, spaces: 2 });

    const result=JSON.parse(json)

 console.log("result.GoodreadsResponse",result)
    return result.GoodreadsResponse.book
    
    } catch (error) {
        return error.message
    }
})

export const getSeriessList=createAsyncThunk(
    "getSeriesList", async (value)=>{
         try {
            const {data}=await axios
            .get(`${process.env.REACT_APP_THIRD_URL}&q=${value}`)
            const json = xmlJs.xml2json(data, { compact: true, spaces: 2 });
        
            const result=JSON.parse(json)
        
         console.log("result.GoodreadsResponse",result)
            return result.GoodreadsResponse.groups.list.group
         } catch (error) {
             return error.message
         }
    }
)
export const getSingleGroupData=createAsyncThunk(
  "getSingleGroupData", async(id)=>{
    try {
        const {data}=await axios
            .get(`${process.env.REACT_APP_FOUR_URL}&id=${id}`)
            const json = xmlJs.xml2json(data, { compact: true, spaces: 2 });
        
            const result=JSON.parse(json)
        
         console.log("result.GoodreadsResponse",result)
            return result.GoodreadsResponse.group
    } catch (error) {
        return error.message
    }
  }
)

