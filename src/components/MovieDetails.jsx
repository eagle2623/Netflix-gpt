import React from "react";

const MovieDetails = ({ title, overview }) => {
	return (
		<div className="absolute left-20 bottom-52 w-1/4 text-white space-y-5 z-100">
			<h1 className="text-5xl font-extrabold tracking-wider">{title}</h1>
			<h1 className="font-medium tracking-wide text-md">{overview}</h1>
			MovieDetails
		</div>
	);
};

export default MovieDetails;
