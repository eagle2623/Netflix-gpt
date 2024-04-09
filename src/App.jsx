import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import BrowsePage from "./pages/BrowsePage";
import loginContext from "./context/loginContext";
import { useState } from "react";

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
	const [loginStatus, setLoginStatus] = useState(false);
	const updateStatus = () => {
		setLoginStatus(!loginStatus);
	};
	return (
		<loginContext.Provider value={{ loginStatus, updateStatus }}>
			<RouterProvider router={router} />
		</loginContext.Provider>
	);
};

export default App;
