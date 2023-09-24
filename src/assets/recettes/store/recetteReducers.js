const reducers = {
	updateRecette: (state, action) => {
		if (action.payload && action.payload.results) {
			state.recette = action.payload.results;
		}

		return state;
	},
}

export default reducers;
