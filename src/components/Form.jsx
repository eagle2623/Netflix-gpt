/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import { formValidator, resetFormFields } from "../utility/helper";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { auth } from "../utility/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../slices/userSlice";

const Form = () => {
	// buy default when false -> new sign up
	const [form, setForm] = useState(false);
	const [error, setError] = useState(null);

	const email = useRef(null);
	const password = useRef(null);
	const nameValue = useRef(null);

	const dispatch = useDispatch();


	const formHandler = () => {
		setForm(!form);
		resetFormFields(email, password);
	};

	const formSubmitHandler = () => {
		const result = formValidator(email.current.value, password.current.value);

		setError(result);
		if (error !== null) return;
		// sign up form
		if (!form) {
			createUserWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					// Signed up
					const user = userCredential.user;

					// update the user
					updateProfile(user, {
						displayName: nameValue.current.value,
						photoURL: "https://xsgames.co/randomusers/avatar.php?g=male",
					})
						.then(() => {
							// Profile updated!
							const { email, uid, displayName, photoURL } =
								auth.currentUser;
							// now add updated profile to redux store

							dispatch(
								addUser({
									email: email,
									uid: uid,
									displayName: displayName,
									photoURL: photoURL,
								})
							);
						})
						.catch((error) => {
							setError(error);
							console.log("Error ----->" + error);
						});
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setError(errorMessage);
					console.log(errorCode + "--" + errorMessage);
				});
		}
		// sign in form
		else {
			signInWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					console.log("signed in");
					
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setError(errorMessage);
					console.log(errorCode + "--" + errorMessage);
				});
		}

		resetFormFields(email, password);
	};
	return (
		<div className="  p-6 z-0">
			<form
				action=""
				className="flex flex-col items-center space-y-4"
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<h1 className="text-[2rem] font-bold text-gray-100 w-full text-left ">
					{form ? `Sign-in` : `Sign-up`}
				</h1>
				{!form && (
					<input
						ref={nameValue}
						type="text"
						name=""
						id=""
						placeholder="Full name"
						className="text-white text-lg rounded-sm bg-black p-5 w-96 self-center "
					/>
				)}
				<input
					ref={email}
					type="email"
					name=""
					id=""
					placeholder="Email"
					className="text-white text-lg rounded-sm bg-black p-5 w-96 self-center "
				/>
				<input
					ref={password}
					type="password"
					name=""
					id=""
					placeholder="Password"
					className="text-white text-lg rounded-sm bg-black p-5 w-96 self-center "
				/>
				<button
					onClick={formSubmitHandler}
					type="submit"
					className="bg-red-600 p-6 rounded-sm w-96 self-center text-gray-100 font-bold text-2xl"
				>
					{form ? `Sign in` : `Sign up`}
				</button>
				{error && (
					<span className="text-red-300 font-semibold">{error}</span>
				)}
				{!form ? (
					<p className="font-bold text-xl text-gray-100">
						Already a user ?{" "}
						<span className="hover:cursor-pointer" onClick={formHandler}>
							Sign in
						</span>
					</p>
				) : (
					<p className="font-bold text-xl text-gray-100">
						New user ?{" "}
						<span className="hover:cursor-pointer" onClick={formHandler}>
							Sign up
						</span>
					</p>
				)}
			</form>
		</div>
	);
};

export default Form;
