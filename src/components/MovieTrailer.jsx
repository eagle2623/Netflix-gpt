import { useSelector } from "react-redux";
import useFetchTrailer from "../hooks/useFetchTrailer";

const MovieTrailer = ({ trailerId }) => {
	const selector = useSelector((store) => store?.movie?.trailer);
	
	useFetchTrailer(trailerId);

	return (
		<div>
			<iframe
				src={`https://www.youtube.com/embed/${selector?.key}`}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
			></iframe>
		</div>
	);
};

export default MovieTrailer;
