import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import RecetteService from '../service/recetteService'
import FetchState from '../../components/FetchState/FetchState'
import './style/style.css'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useState, useEffect } from "react"
import AccordionWithUseEffect from "./Accordion"

const NO_ACCORDION_SELECTED = 0;
const recetteService = new RecetteService();

const Recette = (props) => {

	const [active, setActive] = useState(NO_ACCORDION_SELECTED);

	const handleClick = (index) => {
		if (index === active) {
			setActive(NO_ACCORDION_SELECTED);
			return;
		}
		setActive(index);
	};

	const handleOutsideClick = (event) => {
	if (event.target.closest(".accordion")) {
		return;
	}
	setActive(NO_ACCORDION_SELECTED);
	};

	useEffect(() => {
		window.addEventListener("click", handleOutsideClick);
		return () => {
			window.removeEventListener("click", handleOutsideClick);
		};
	}, []);

	const params = useParams();
	
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["meals", params.id],
		queryFn: () => recetteService.IdRecette(params.id),
	});

	return (
		<Container fluid className='min-vh-100 d-grid bg-black' >
			<FetchState isLoading={isLoading} isError={isError} error={error}>
				<Container className='p-5'>
					<div className="d-flex justify-content-end">
						<Link to={`/`}>
							<h6 className='btn btn-danger'> Accueil</h6>
						</Link>
						<Link to={`/favories`}>
							<h6 className='btn btn-danger'>Mes favories</h6>
						</Link>
					</div>
						{data && data.map((meals) => (
							<div className='' key={meals.idMeal} xs={12} sm={6} md={4} lg={3} xl={2}>
								<h2 className='text-white pb-5'>{meals.strMeal}</h2>
								<Link to={`/`} className='text-white'>
									<h6 className='text-center py-5'> Retour a la page d'accueil</h6>
								</Link>
								<div className='bg-white p-5'>
									<Row>
										<Col>
											<h5>Catégorie : {meals.strCategory}</h5>
											<img src={meals.strMealThumb} alt={meals.strMealThumb} className='py-3 text-center img-thumbnail'/>
											<div className="accordions">
												<AccordionWithUseEffect
													value={1}
													active={active}
													onClick={handleClick}
													title="Ingrédients"
												>

													<ul>
														<li className='list-group-item'>{meals.strMeasure1} : {meals.strIngredient1}</li>
														<li className='list-group-item'>{meals.strMeasure2} : {meals.strIngredient2}</li>
														<li className='list-group-item'>{meals.strMeasure3} : {meals.strIngredient3}</li>
														<li className='list-group-item'>{meals.strMeasure4} : {meals.strIngredient4}</li>
														<li className='list-group-item'>{meals.strMeasure5} : {meals.strIngredient5}</li>
														<li className='list-group-item'>{meals.strMeasure6} : {meals.strIngredient6}</li>
														<li className='list-group-item'>{meals.strMeasure7} : {meals.strIngredient7}</li>
														<li className='list-group-item'>{meals.strMeasure8} : {meals.strIngredient8}</li>
														<li className='list-group-item'>{meals.strMeasure9} : {meals.strIngredient9}</li>
														<li className='list-group-item'>{meals.strMeasure10} : {meals.strIngredient10}</li>
														<li className='list-group-item'>{meals.strMeasure11} : {meals.strIngredient11}</li>
														<li className='list-group-item'>{meals.strMeasure12} : {meals.strIngredient12}</li>
														<li className='list-group-item'>{meals.strMeasure13} : {meals.strIngredient13}</li>
														<li className='list-group-item'>{meals.strMeasure14} : {meals.strIngredient14}</li>
														<li className='list-group-item'>{meals.strMeasure15} : {meals.strIngredient15}</li>
														<li className='list-group-item'>{meals.strMeasure16} : {meals.strIngredient16}</li>
														<li className='list-group-item'>{meals.strMeasure17} : {meals.strIngredient17}</li>
														<li className='list-group-item'>{meals.strMeasure18} : {meals.strIngredient18}</li>
														<li className='list-group-item'>{meals.strMeasure19} : {meals.strIngredient19}</li>
														<li className='list-group-item'>{meals.strMeasure20} : {meals.strIngredient20}</li>
													</ul>  
												</AccordionWithUseEffect>
											
												<AccordionWithUseEffect
													value={2}
													active={active}
													onClick={handleClick}
													title="Instructions"
												>
													{meals.strInstructions}
												</AccordionWithUseEffect>
											</div>
										</Col>									
									</Row>
								</div>					
							</div>
						))}
				</Container>
			</FetchState>
		</Container>
	)	
}

export default Recette
