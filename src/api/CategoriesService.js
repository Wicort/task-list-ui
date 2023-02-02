import {categoriesList} from "../data/categories"

export default class CategoriesService {

    static getUserCategories() {
        return categoriesList;
    }
}