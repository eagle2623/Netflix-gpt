import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
	name: "appConfig",
	initialState: {
		gptStatus:false
	},
	reducers: {
		toggleGptSuggestionStatus: (state) => {
			state.gptStatus = !state.gptStatus;
		},
	},
});

export const {toggleGptSuggestionStatus} = appSlice.actions
export default appSlice.reducer