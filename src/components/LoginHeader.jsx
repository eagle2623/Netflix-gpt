import React from 'react'
import Button from './Button';

const LoginHeader = () => {
    	const logoutHandler = () => {
			signOut(auth)
				.then(() => {
					// Sign-out successful.
				})
				.catch((error) => {
					// An error happened.
				});
    };
    
  return (
		<div className="absolute w-screen p-2 bg-gradient-to-b from-black z-20">
			<div className="p-1 flex justify-between">
				<img
					src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
					alt="netflix-logo"
					className="h-20 "
				/>

				<div className="p-3">
					<Button text={"Logout"} functionality={logoutHandler} />
				</div>
			</div>
		</div>
  );
}

export default LoginHeader