import {todayTasksList} from "../data/tasks";

export default class TasksService {

    static getTodayTasks() {
        return todayTasksList;
    }
}