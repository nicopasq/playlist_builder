import { configureStore } from "@reduxjs/toolkit";
import accessTokenReducer from "./accessToken/accessTokenSlice";


export default configureStore({
    reducer: {
        accessToken: accessTokenReducer
    }
})