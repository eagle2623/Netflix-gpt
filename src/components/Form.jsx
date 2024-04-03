
const Form = () => {
  return (
		<div className="absolute top-1/2 transform -translate-y-1/2  text-white w-full h-[400px] p-6 text-center flex justify-center">
			<form action="" className="flex flex-col p-10 space-y-8 w-2/4">
				<p className="font-bold text-xl">Sign in</p>
				<input
					type="email"
					name=""
					id=""
					placeholder="Email"
					className="p-1 rounded-lg bg-slate-300 w-3/4 self-center"
				/>
				<input
					type="password"
					name=""
					id=""
					placeholder="Password"
					className="p-1 rounded-lg bg-slate-300 w-3/4 self-center"
				/>
				<button type="submit" className="bg-red-600 p-1 rounded-lg w-3/4 self-center">
					Sign in
				</button>
			</form>
		</div>
  );
}

export default Form