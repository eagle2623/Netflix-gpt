import React, { useEffect } from "react";
import { API_OPTIONS } from "../utility/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies, addTopRatedMovies, addUpcommingMovies } from "../slices/movieSlice";
import MoviesList from "./MoviesList";

const SecondaryVideoContainer = () => {
	const dispatch = useDispatch();
	const popularMovies = useSelector((store) => store.movie.popularMovies);
  const topRatedMovies = useSelector((store) => store.movie.topRatedMovies);
  const nowPlayingMovies = useSelector((store) => store.movie.nowPlayingMovies);
  const upcommingMovies = useSelector((store) => store.movie.upcommingMovies);

	const fetchPopularMovies = async () => {
		const response = await fetch(
			"https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
			API_OPTIONS
		);
		const data = await response.json();
		dispatch(addPopularMovies(data.results));
		console.log(data.results);
	};
  const fetchTopRatedMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await response.json();
    console.log(data);
    dispatch(addTopRatedMovies(data.results));
  };
  const fetchUpcommingMovies = async () => {
    const response = await fetch(
			"https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
			API_OPTIONS
		);
    const data = await response.json();
    console.log(data);
    dispatch(addUpcommingMovies(data.results));
  };
  
	useEffect(() => {
		fetchPopularMovies();
	}, []);

	useEffect(() => {
		fetchTopRatedMovies();
  }, []);
  useEffect(() => {
    fetchUpcommingMovies()
  },[])

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
