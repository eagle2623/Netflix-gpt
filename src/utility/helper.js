export const formValidator = (email, password) => {
	const emailRegex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const passwordRegex =
		/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
	if (!emailRegex.test(email)) {
		return "Email is invalid";
	}
	if (!passwordRegex.test(password)) {
		return "Password is invalid";
	}
	return null;
};
export const resetFormFields = (email , password) => {
	email.current.value = "";
	password.current.value = "";
}