import { useDispatch } from "react-redux";
import { API_OPTIONS, getRandomNumber } from "../utility/constants";
import { addTrailer } from "../slices/movieSlice";
import { useEffect } from "react";

const useFetchTrailer = ( trailerId ) => {
	const dispatch = useDispatch();

	const fetchTrailer = async () => {
		const response = await fetch(
			// `https://api.themoviedb.org/3/movie/`+trailerId+`/videos?language=en-US`,
			`https://api.themoviedb.org/3/movie/${trailerId}/videos?language=en-US`,
			API_OPTIONS
		);
		const data = await response.json();

		const FilteredData = data?.results?.filter(
			(video) => video.type === "Trailer"
		);
		const trailer =
			FilteredData?.length > 0
				? FilteredData[getRandomNumber(0, FilteredData.length - 1)]
				: data?.results[0];
        dispatch(addTrailer(trailer));
        
	};

	useEffect(() => {
		fetchTrailer();
	}, []);
};
export default useFetchTrailer