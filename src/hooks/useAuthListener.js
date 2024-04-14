import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import loginContext from "../context/loginContext";
import { addUser, removeUser } from "../slices/userSlice";
import { auth } from "../utility/firebase";

const useAuthListener = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {  updateStatus } = useContext(loginContext);
    
    	useEffect(() => {
			onAuthStateChanged(auth, (user) => {
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
					updateStatus(true);
					navigate("/browse");
				} else {
					// User is signed out
					dispatch(removeUser());
					updateStatus(false);
					navigate("/");
				}
			});
		}, []);
}
export default useAuthListener;