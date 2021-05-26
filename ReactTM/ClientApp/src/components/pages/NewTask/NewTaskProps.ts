import { Task } from "../../../models";

export interface NewTaskProps {
    task: Task,
    setTitle: Function,
    setDeathline: Function,
    setDescription: Function,
    dropExecutor: Function,
}