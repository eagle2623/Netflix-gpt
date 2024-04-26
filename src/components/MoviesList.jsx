import React, { useRef } from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ heading, movieList }) => {
    
  
	return (
		<div className="p-4 space-y-1 overflow-hidden">
			<h1 className="text-3xl px-2">{heading}</h1>
			<div className="flex overflow-x-scroll no-scrollbar">
				<div className="flex">
					{movieList?.map((movie) => (
						<MovieCard key={movie.id} movie={movie} />
					))}
				</div>
			</div>
		</div>
	);
};

export default MoviesList;
