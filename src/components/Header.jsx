import { useContext } from "react";
import loginContext from "../context/loginContext";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const { loginStatus, updateStatus } = useContext(loginContext);
	const navigate = useNavigate();

	const logoutHandler = () => {
		updateStatus();
		// back to login page after logout
		navigate("/");
	};

	return (
		<div className="h-28 px-40 pt-6 flex justify-between text-white  absolute  top-0 font-semibold w-full bg-gradient-to-b from-black z-10">
			<img
				src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
				alt="netflix-logo"
				className="h-20 w-40"
			/>

			{loginStatus && (
				<Button text={"Logout"} functionality={logoutHandler} />
			)}
		</div>
	);
};

export default Header;
