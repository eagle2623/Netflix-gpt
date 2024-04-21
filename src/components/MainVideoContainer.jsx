import React from "react";
import MovieTrailer from "./MovieTrailer";
import MovieDetails from "./MovieDetails";
import { useSelector } from "react-redux";

const MainVideoContainer = () => {
	const selector = useSelector((store) => store?.movie);
	if (!selector.videoObj) return;
	const { id , title , overview} = selector?.videoObj;

	return (
		<div>
			<MovieTrailer trailerId={id} />
			<MovieDetails title={title} overview={overview} />
		</div>
	);
};

export default MainVideoContainer;
