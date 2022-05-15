import { configureStore } from "@reduxjs/toolkit";
//import reduceruser from "../reducer.js/Userreducer";
//import  createReducer from '../reducer.js/Userreducer'
import Userslice from "./features/Userslice";
const store= configureStore({
   // reducer:reduceruser
  //  reducer:  createReducer
  reducer:{
      user: Userslice
  }
})
export {store} 

