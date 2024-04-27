import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser, updateFormStatus } from "../slices/userSlice";
import { auth } from "../utility/firebase";

const useAuthListener = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in
				const { email, uid, displayName, photoURL } = user;
				// now add updated profile to redux store

				dispatch(
					addUser({
						email: email,
						uid: uid,
						displayName: displayName,
						photoURL: photoURL,
					})
				);
				dispatch(updateFormStatus(true));
				navigate("/browse");
				
			} else {
				// User is signed out
				dispatch(removeUser());
				navigate("/");
			}
		});
		return () => unsubscribe();
	}, []);
};
export default useAuthListener;
