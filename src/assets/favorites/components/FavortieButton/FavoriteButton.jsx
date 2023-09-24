import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../store/favoritesSlice";
import { favoritesSelector } from "../../store/favoriteSelectors";
import Button from 'react-bootstrap/Button'

const FavoriteButton = ({ recette }) => {

  const dispatch = useDispatch();

  const favorites = useSelector(favoritesSelector);

  const isFavorite = favorites.filter((favorite) => favorite.strMealThumb === recette.strMealThumb).length > 0;

  const onClick = () => {

    if (isFavorite) {

      return dispatch(removeFavorite(recette));

    } else {

      return dispatch(addFavorite(recette));

    }

  };

  return (

    <Button type="button" onClick={onClick} className="btn btn-link">

      {isFavorite ? (

        <div>Enlever des favoris</div>
        
      ) : (

        <div>Ajouté aux favories</div>
        
      )}

    </Button>
    
  );
};

export default FavoriteButton;
