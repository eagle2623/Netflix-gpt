import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addVideoObj } from "../slices/movieSlice";
import { API_OPTIONS, getRandomNumber } from "../utility/constants";
import { useState } from "react";

const useNowPlayingMovies = () => {
    	const dispatch = useDispatch();

		const fetchNowPlayingMovies = async () => {
			const response = await fetch(
				"https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
				API_OPTIONS
			);
			const data = await response.json();
			
			dispatch(addNowPlayingMovies(data?.results));
			
			// add random video obj to store and treat it as trailer, on each mount
			dispatch(addVideoObj(data?.results[getRandomNumber(0, 19)]));
			console.log(data?.results[getRandomNumber(0, 19)]);
			
		};
		useState(() => {
			fetchNowPlayingMovies();
		}, []);
}

export default useNowPlayingMovies