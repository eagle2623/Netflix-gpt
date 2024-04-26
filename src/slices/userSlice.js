/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        formStatus:false
    },
    reducers: {
        addUser: (state, action) => {
            return  action.payload
        },
        removeUser: (state) => {
           return  null
        },
        updateFormStatus: (state, action) => {
            return action.payload
        }
    }
})
export const {addUser , removeUser ,updateFormStatus } = userSlice.actions
export default userSlice.reducer