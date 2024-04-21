export const API_OPTIONS = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjM0OWQ2NWI0MTc2MWUxYmRmNDdkMDE0MGQxNGY4OSIsInN1YiI6IjY2MWMwNzZkYTM5ZDBiMDE2NGJmZjIxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aQPgj3f29l6Z1S8hnN-raNkm27N0ZaLH3G9gTbK7B-8",
	},
};

// export const getRandomNumber = () => {
// 	return Math.floor(Math.random() * (19 - 0 + 1)) + 0;
// }
export function getRandomNumber(min, max) {
	if (min > max) {
		throw new Error("Minimum value must be less than maximum value.");
	}

	return Math.floor(Math.random() * (max - min + 1)) + min;
}