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
		addPopularMovies: (state, action) => {
			state.popularMovies = action.payload
		},
		addTopRatedMovies: (state, action) => {
			state.topRatedMovies = action.payload 
		},
		addUpcommingMovies: (state, action) => {
			state.upcommingMovies = action.payload 
		}
	},
});

export const { addNowPlayingMovies , addVideoObj ,addTrailer,addPopularMovies,addTopRatedMovies,addUpcommingMovies } = movieSlice.actions;
export default movieSlice.reducer