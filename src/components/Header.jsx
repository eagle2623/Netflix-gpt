
const Header = () => {
  return (
		<div className="h-28 px-40 pt-6 flex justify-between text-white  absolute  top-0 font-semibold w-full bg-gradient-to-b from-black z-10">
			<img
				src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
				alt="netflix-logo"
				className="h-20 w-40"
			/>
			<ul className="flex space-x-8 pt-4">
				<li className="hover:text-slate-400
				">Home</li>
				<li className="hover:text-slate-400
				">About</li>
				<li className="hover:text-slate-400
				">Contact</li>
			</ul>
		</div>
  );
}

export default Header