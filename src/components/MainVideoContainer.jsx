import React from "react";
import MovieTrailer from "./MovieTrailer";
import MovieDetails from "./MovieDetails";
import { useSelector } from "react-redux";

const MainVideoContainer = () => {
	// retrieve the video obj details from the store which was stored through useNowPlayingMovies hook
	const selector = useSelector((store) => store?.movie);
	if (!selector.videoObj) return;
	const { id, title, overview } = selector?.videoObj;

	return (
		<div className="h-screen flex flex-col w-screen bg-gradient-to-r from-black no-scrollbar">
			<MovieTrailer trailerId={id} />

			<MovieDetails title={title} overview={overview} />
		</div>
	);
};

export default MainVideoContainer;
