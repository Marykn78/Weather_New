import { configureStore } from "@reduxjs/toolkit"
import weatherSlice from "./reducer/weatherslice";
const store = configureStore({
    reducer:{
        weather:weatherSlice
    }
})
export default store;