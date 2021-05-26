import { ApplicationState } from '..';

export const getNewTask = (state: ApplicationState) => state.newTask.task;
