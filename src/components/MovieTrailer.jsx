import { useSelector } from "react-redux";
import useFetchTrailer from "../hooks/useFetchTrailer";

const MovieTrailer = ({ trailerId }) => {
	const selector = useSelector((store) => store?.movie?.trailer);
	
	useFetchTrailer(trailerId);

	return (
		<div className="bg-gradient-to from-black  w-screen overflow-hidden -z-50 no-scrollbar">
			<iframe
				src={`https://www.youtube.com/embed/${selector?.key}?autoplay=1&mute=1`}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				className="w-screen aspect-video  bg-gradient-to-r from-black  transform scale-150 no-scrollbar"
			></iframe>
		</div>
	);
};

export default MovieTrailer;
 