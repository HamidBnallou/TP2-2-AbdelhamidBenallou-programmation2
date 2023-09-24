import { createSlice } from '@reduxjs/toolkit'
import reducers from './recetteReducers';

export const recetteSlice = createSlice({
	name: 'recette',
	initialState: {
		recette: []
	},
	reducers: reducers,
});

export const { updateRecette } = recetteSlice.actions;

export default recetteSlice.reducer;
