
import Button from "./Button";
import { auth } from "../utility/firebase";
import useAuthListener from "../hooks/useAuthListener";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { updateFormStatus } from "../slices/userSlice";

const Header = () => {
	const formStatus = useSelector(store => store?.user?.formStatus)
	const dispatch = useDispatch()

	const logoutHandler = () => {
		dispatch(updateFormStatus(false));

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

				{formStatus && (
					<div className="flex items-center space-x-2 ">
						<Button text={'GPT-suggestion'} color={'bg-purple-500'}/>
						<Button
							text={"Logout"}
							functionality={logoutHandler}
							color={"bg-red-600"}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
