/* eslint-disable react/prop-types */
const Button = ({ text, functionality,color }) => {
	return (
		<div>
			<button
				className={`p-4 rounded-xl font-bold ${color}`}
				onClick={() => functionality()}
			>
				{text}
			</button>
		</div>
	);
};

export default Button;
