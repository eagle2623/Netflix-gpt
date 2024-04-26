import { useEffect } from "react";
import { addPopularMovies } from "../slices/movieSlice";
import { API_OPTIONS } from "../utility/constants";
import { useDispatch } from "react-redux";

const usePopularMovies = () => {
    const dispatch = useDispatch()

	const fetchPopularMovies = async () => {
		const response = await fetch(
			"https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
			API_OPTIONS
		);
		const data = await response.json();
		dispatch(addPopularMovies(data.results));
		console.log(data.results);
    };
    	useEffect(() => {
			fetchPopularMovies();
		}, []);
}
export default usePopularMovies