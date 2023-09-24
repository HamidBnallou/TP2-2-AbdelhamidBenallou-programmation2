import { configureStore } from '@reduxjs/toolkit'
import recetteReducer from '../assets/recettes/store/recetteSlice';
import favoriteReducer from '../assets/favorites/store/favoritesSlice';

export default configureStore({
	reducer: {
		recette: recetteReducer,
		favorites: favoriteReducer,
	},
});
