/* eslint-disable react/prop-types */
const Button = ({ text, functionality }) => {
	return (
		<div>
			<button
				className="w-28 bg-red-600 p-4 rounded-xl font-bold"
				onClick={() => functionality()}
			>
				{text}
			</button>
		</div>
	);
};

export default Button;
