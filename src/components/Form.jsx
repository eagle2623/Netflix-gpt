import { useRef, useState } from "react";
import { formValidator } from "../utility/helper";

const Form = () => {
	const [form, setForm] = useState(false);
	const [error, setError] = useState();

	const email = useRef();
	const password = useRef();
	const formHandler = () => {
		setForm(!form);
		email.current.value = "";
		password.current.value = "";
	};
	const formSubmitHandler = (e) => {
		e.preventDefault();
		const result = formValidator(email.current.value, password.current.value);
		setError(result);
		email.current.value = "";
		password.current.value = "";
	};
	return (
		<div className="absolute top-1/2 transform -translate-y-1/2  text-white text-center w-10/12 p-1 flex justify-center">
			<form
				action=""
				className="flex flex-col p-2 space-y-6 w-2/4 bg-black bg-opacity-55 rounded-2xl "
			>
				<p className="font-bold text-xl">{form ? `Sign in` : `Sign up`}</p>
				{!form && (
					<input
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
