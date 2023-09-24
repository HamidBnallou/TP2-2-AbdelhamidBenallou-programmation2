import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import RecettesService from '../service/recettesService'
import FetchState from '../../components/FetchState/FetchState'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateRecette } from "../store/recetteSlice";
import FavoriteButton from "../../favorites/components/FavortieButton/FavoriteButton";
import { useSelector } from "react-redux";
import { favoritesSelector } from "../../favorites/store/favoriteSelectors";
import './style/style.css'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const recettesService = new RecettesService();

const recettes = () => {

	const params = useParams();
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["meals", params.name],
		queryFn: () => recettesService.RecettesParCategorie(params.name),
	});
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(updateRecette(data));
	}, [dispatch, data]);
	const favorites = useSelector(favoritesSelector);
	return (
		<Container fluid className='min-vh-100 d-grid'>
			<FetchState isLoading={isLoading} isError={isError} error={error}>
				<Container className=' p-5'>
					<div className="d-flex justify-content-end">
						<Link to={`/`}>
							<h6 className='btn btn-danger'> Accueil</h6>
						</Link>
						<Link to={`/favories`}>
							<h6 className='btn btn-danger'>Mes favories</h6>
						</Link>
					</div>
				<h2 className='text-success pt-5'> Liste des favories </h2>
				<Link to={`/`} className='text-white'>
						<h6 className='text-center py-5'> Retour a la page d'accueil</h6>
				</Link>
					<Row>
						{favorites.map((recette) => (
							<Col className='bg-black text-white border border-secondary rounded-3 m-3 p-3'  key={recette} xs={12} sm={6} md={4} lg={3} xl={2}>
                                <Link className='meals-title_link' to={`/meals/${recette.idMeal}`} key={recette.idMeal}>
									<h5 className='text-center my-3'>{recette.strMeal}</h5>
								</Link>
								<img src={recette.strMealThumb} alt="" className='img-thumbnail'/>
								<FavoriteButton recette={recette} />
							</Col>
						))}
					</Row>
				</Container>
			</FetchState>
		</Container>
	)
}

export default recettes;
