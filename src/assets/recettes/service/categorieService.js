import { config } from '../../../Config';

class categorieService {

	endpoint = "categories.php";

	baseUrl = config.baseUrl;

	async ToutesLesCategories() {
        
		const response = await fetch(`${this.baseUrl}${this.endpoint}`);

		if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);

		const data = await response.json();

		return data.categories;
	}

}

export default categorieService;