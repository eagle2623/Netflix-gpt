import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
	name: "movies",
	initialState: {
		nowPlayingMovies: null,
		videoObj: null,
		trailer: null,
	},
	reducers: {
		addNowPlayingMovies: (state, action) => {
			state.nowPlayingMovies = action.payload;
		},
		addVideoObj: (state, action) => {
			state.videoObj = action.payload;
		},
		addTrailer: (state, action) => {
			state.trailer = action.payload;
		},
	},
});

export const { addNowPlayingMovies , addVideoObj ,addTrailer } = movieSlice.actions;
export default movieSlice.reducer