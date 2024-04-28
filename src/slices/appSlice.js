import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
	name: "appConfig",
	initialState: {
		gptStatus: false,
		currentLanguage:'en'
	},
	reducers: {
		toggleGptSuggestionStatus: (state , action) => {
			state.gptStatus = (!state.gptStatus)
		},
		updateLanguage: (state, action) => {
			state.currentLanguage = action.payload;
		},
	},
});

export const {toggleGptSuggestionStatus , updateLanguage} = appSlice.actions
export default appSlice.reducer