import Header from "../components/Header";
import MainVideoContainer from "../components/MainVideoContainer";
import SecondaryVideoContainer from "../components/SecondaryVideoContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";


const BrowsePage = () => {

	// fetch nowPlaying movies and add it to the store
	useNowPlayingMovies()

	return (
		<div>
			<>
				<Header />
				<MainVideoContainer/>
				<SecondaryVideoContainer/>
			</>
		</div>
	);
};

export default BrowsePage;
