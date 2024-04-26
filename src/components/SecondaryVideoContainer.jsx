import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const SecondaryVideoContainer = () => {
	const popularMovies = useSelector((store) => store.movie.popularMovies);
	const topRatedMovies = useSelector((store) => store.movie.topRatedMovies);
	const nowPlayingMovies = useSelector(
		(store) => store.movie.nowPlayingMovies
	);
	const upcommingMovies = useSelector((store) => store.movie.upcommingMovies);

	usePopularMovies();
	usePopularMovies();
	useTopRatedMovies();

	// if (!topRatedMovies || !popularMovies) return;
	return (
		<div className="text-white -mt-36 ">
			<MoviesList heading={"Popular Movies"} movieList={popularMovies} />
			<MoviesList heading={"Top Rated"} movieList={topRatedMovies} />
			<MoviesList heading={"Now Playing"} movieList={nowPlayingMovies} />
			<MoviesList heading={"Upcomming"} movieList={upcommingMovies} />
		</div>
	);
};

export default SecondaryVideoContainer;
