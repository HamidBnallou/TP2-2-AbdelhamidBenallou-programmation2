import { config } from '../../../Config';

class recettesService {
    
	endpoint = "filter.php?c=";

	baseUrl = config.baseUrl;
    
	async RecettesParCategorie(name) {
		
		const response = await fetch(`${this.baseUrl}${this.endpoint}${name}`);

		if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);

		const data = await response.json();

		return data.meals;

	}

}

export default recettesService;