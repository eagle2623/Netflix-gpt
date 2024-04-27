import Header from "../components/Header";
import MainVideoContainer from "../components/MainVideoContainer";
import SecondaryVideoContainer from "../components/SecondaryVideoContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";


const BrowsePage = () => {

	// fetch nowPlaying movies and add it to the store
	useNowPlayingMovies()

	return (
		<div className="bg-gradient-to-b from-black to-gray-950 opacity-85 w-screen no-scrollbar">
			<Header />
			<MainVideoContainer />
			<SecondaryVideoContainer />
		</div>
	);
};

export default BrowsePage;
