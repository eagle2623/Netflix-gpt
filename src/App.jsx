import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import BrowsePage from "./pages/BrowsePage";
import loginContext from "./context/loginContext";


const router = createBrowserRouter([
	{
		path: "/",
		element: <LoginPage />,
	},
	{
		path: "browse",
		element: <BrowsePage />,
	},
]);

const App = () => {

	return (
		
			<RouterProvider router={router} />
		
	);
};

export default App;
