/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import { formValidator, resetFormFields } from "../utility/helper";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { auth } from "../utility/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../slices/userSlice";

const Form = () => {
	// buy default when false -> new sign up
	const [form, setForm] = useState(false);
	const [error, setError] = useState(null);

	const email = useRef(null);
	const password = useRef(null);
	const nameValue = useRef(null);

	const navigate = useNavigate();
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
						photoURL: "https://example.com/jane-q-user/profile.jpg",
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
							// now navigate to browse page , once logged in
							navigate("/browse");
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
					navigate("/browse");
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
		<div className="absolute top-1/2 transform -translate-y-1/2  text-white text-center w-10/12 p-1 flex justify-center">
			<form
				action=""
				className="flex flex-col p-2 space-y-6 w-2/4 bg-black bg-opacity-55 rounded-2xl "
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<p className="font-bold text-xl">{form ? `Sign in` : `Sign up`}</p>
				{!form && (
					<input
						ref={nameValue}
						type="text"
						name=""
						id=""
						placeholder="Full name"
						className="rounded-lg bg-black p-4 w-96 self-center "
					/>
				)}
				<input
					ref={email}
					type="email"
					name=""
					id=""
					placeholder="Email"
					className="rounded-lg bg-black p-4 w-96 self-center"
				/>
				<input
					ref={password}
					type="password"
					name=""
					id=""
					placeholder="Password"
					className=" rounded-lg bg-black p-4 w-96 self-center"
				/>
				<button
					onClick={formSubmitHandler}
					type="submit"
					className="bg-red-600 p-4 rounded-lg w-96 self-center"
				>
					{form ? `Sign in` : `Sign up`}
				</button>
				{error && (
					<span className="text-red-300 font-semibold">{error}</span>
				)}
				{!form ? (
					<p className="font-bold text-xl">
						Already a user ?{" "}
						<span className="hover:cursor-pointer" onClick={formHandler}>
							Sign in
						</span>
					</p>
				) : (
					<p className="font-bold text-xl">
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
