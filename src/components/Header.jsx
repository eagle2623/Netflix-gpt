import { useContext, useEffect } from "react";
import loginContext from "../context/loginContext";
import Button from "./Button";
import { auth } from "../utility/firebase";
import useAuthListener from "../hooks/useAuthListener";
import { signOut } from "firebase/auth";

const Header = () => {
	const { loginStatus } = useContext(loginContext);

	const logoutHandler = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
			});
	};

	// listens to any changes in auth and redirects accordingly.
	useAuthListener();

	return (
		<div className="absolute top-0 w-screen bg-gradient-to-b from-black z-10">
			<div className="flex justify-between p-6 px-32">
				<img
					src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
					alt="netflix-logo"
					className="h-20 "
				/>

				{loginStatus && (
					<Button text={"Logout"} functionality={logoutHandler} />
				)}
			</div>
		</div>
	);
};

export default Header;
