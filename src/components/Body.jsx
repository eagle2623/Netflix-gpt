import Form from "./Form";

const Body = () => {
	return (
		<div className="bg-gradient-to-b from-black   ">
			<div className="flex justify-center items-center h-screen ">
				<img
					src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg"
					alt="background"
					className="absolute inset-0 w-full h-full object-cover "
				/>
				<div className="flex justify-center z-10 ">
					<Form />
				</div>
			</div>
		</div>
	);
};

export default Body;
