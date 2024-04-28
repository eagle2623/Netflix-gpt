import Button from "./Button";
import { auth } from "../utility/firebase";
import useAuthListener from "../hooks/useAuthListener";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { updateFormStatus } from "../slices/userSlice";
import { toggleGptSuggestionStatus } from "../slices/appSlice";
import LanguageDropdown from "./LanguageDropdown";

const Header = () => {
	const formStatus = useSelector((store) => store?.user?.formStatus);
		const gptSuggestionStatus = useSelector(
			(store) => store?.appConfig?.gptStatus
		);
	const dispatch = useDispatch();

	const logoutHandler = () => {
		dispatch(updateFormStatus(false));
		// have to dispatch it here also because if we dont do it then when we logout , after that status of gptStatus remains true and on re login user lands on gptPage instead of homepage
		dispatch(toggleGptSuggestionStatus());

		signOut(auth)
			.then(() => {
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
			});
	};
	const gptSuggestionToggleHandler = () => {

		dispatch(toggleGptSuggestionStatus());
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
						{gptSuggestionStatus && <LanguageDropdown/>}
						<Button
							text={gptSuggestionStatus ? "Homepage" :"GPT-suggestion"}
							functionality={gptSuggestionToggleHandler}
							color={"bg-purple-500"}
						/>
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
