import {categoriesList} from "../data/categories"
import axios from "axios";
import {Links, SERVER_HOST, API_LINK} from "./Links";

export default class CategoriesService {

    static getUserCategories() {

        return categoriesList;
    }

    static async getAll(userId){
        const response = await axios.get(API_LINK + Links.CATEGORIES + "/" + userId);
        console.log(response);
        return response;
    }
}