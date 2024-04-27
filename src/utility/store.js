import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import movieSlice from "../slices/movieSlice";
import appSlice from "../slices/appSlice";
const store = configureStore({
    reducer: {
        user: userSlice,
        movie: movieSlice,
        appConfig:appSlice,
    }
})

export default store