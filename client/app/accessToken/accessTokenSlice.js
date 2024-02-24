import { createSlice } from "@reduxjs/toolkit";


export const accessTokenSlice = createSlice({
    name: "access_token",
    initialState:{
        token:""
    },
    reducers: {
        setAccessToken: (state, action) => {
            state.token=action.payload;
        }
    }
})

export default accessTokenSlice.reducer;