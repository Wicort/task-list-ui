import {todayTasksList} from "../data/tasks";
import axios from "axios";
import {Links} from "./Links";

export default class TasksService {

    static getTodayTasks() {
        return todayTasksList;
    }

    static async getAllTasks(userId) {
        const response = await axios.get(Links.TASKS + "/user/" + userId);
        console.log(response);
        return response;
    }

   static async getCategoriesTasks(categoryId) {
       const response = await axios.get(Links.TASKS + categoryId + "/tasks");
       console.log(response);
       return response;
   }
}