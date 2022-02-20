import {createSlice} from "@reduxjs/toolkit";
import {LOCALES} from "../../intl/locales";

const initialState = {
    access_token:null,
    refresh_token:null,
    user_id:null,
    locale: LOCALES.KYRGYZ,
}


const main = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setLocale(state, action) {
            state.locale = action.payload
        },
        setAccessToken(state,action) {
            state.access_token = action.payload
        },
        setRefreshToken(state,action) {
            state.refresh_token = action.payload
        },
        setUserId(state,action){
            state.user_id = action.payload
        }
    }
})

export const {
    setLocale,
    setAccessToken,
    setRefreshToken,
    setUserId
} = main.actions;

export default main.reducer
