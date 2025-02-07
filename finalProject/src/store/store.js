import { configureStore } from "@reduxjs/toolkit";
import cryptoSlice from "./crypto"

const store=configureStore({
    reducer: {
        cryptoData: cryptoSlice
    }
})


export default store