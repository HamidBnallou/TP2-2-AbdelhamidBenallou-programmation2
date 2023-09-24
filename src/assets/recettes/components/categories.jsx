import { useQuery } from '@tanstack/react-query'
import CategorieService from '../service/categorieService'
import FetchState from '../../components/FetchState/FetchState'
import './style/style.css'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Link } from 'react-router-dom'


const categorieService = new CategorieService();

const RecettesCategories = () => {
	const { isError, isLoading, error, data } = useQuery({
		queryKey: ["categorie"],
		queryFn: () => categorieService.ToutesLesCategories(),
	})
	return (
		<Container fluid className='d-grid min-vh-100 bg-black' >
			<FetchState isLoading={isLoading} isError={isError} error={error}>
				<Container className='p-5'>
					<div className="d-flex justify-content-end">
						<Link to={`/favories`}>
							<h6 className='btn btn-danger'>Mes favories</h6>
						</Link>
					</div>
					<h1 className='text-white'>Abdelhamid Benallou</h1>
					<h2 className='text-danger pb-5'>Liste des catégories</h2>
						<Row>
							{data?.map((categorie) => (
								<Col key={categorie.strCategory} className='categorie border border-secondary rounded-3 m-3 p-3' xs={12} sm={6} md={4} lg={3} xl={2}>
									<Link className='text-center' to={`/categories/${categorie.strCategory}`}>
											<h3>{categorie.strCategory}</ h3>
									</Link>
									<img src={categorie.strCategoryThumb} alt="" className='my-3 img-thumbnail'/>
									<p>{categorie.strCategoryDescription}</p>
								</Col>
							))}
						</Row>
				</Container>
			</FetchState>
		</Container>
	)
}

export default RecettesCategories;