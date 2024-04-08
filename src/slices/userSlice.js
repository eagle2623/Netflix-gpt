/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        
    },
    reducers: {
        addUser: (state, action) => {
            state =  action.payload
        },
        removeUser: (state) => {
           state =  null
        }
    }
})
export const {addUser , removeUser} = userSlice.actions
export default userSlice.reducer