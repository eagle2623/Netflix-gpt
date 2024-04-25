import Form from "./Form";

const Body = () => {
	return (
		<div
			className="flex justify-center items-center h-screen  bg-gradient-to-br from-gray-950 to-transparent
			"
		>
			<img
				src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg"
				alt="background"
				className="absolute inset-0 w-full h-full object-cover -z-20"
			/>

			<Form />
		</div>
	);
};

export default Body;
