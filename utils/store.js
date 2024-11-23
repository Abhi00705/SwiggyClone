import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./ResturantListSlice";

const Store = configureStore({
    reducer:{
        ResturantList:cardSlice,
       
    }
})
export default Store;