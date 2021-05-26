import { Task } from '../../models';
import { SET_DETHLINE, SET_TITLE, SET_DESCRIPTION, DROP_EXECUTORS } from './actionTypes'


export interface SetDethline {
    type: typeof SET_DETHLINE,
    newValue: Date
}

export interface SetTitle {
    type: typeof SET_TITLE,
    newValue: String
}

export interface SetDescription {
    type: typeof SET_DESCRIPTION,
    newValue: String
}

export interface DropExecutors {
    type: typeof DROP_EXECUTORS,
    userId: String
}

export type NewTaskActionTypes = SetDethline | SetTitle | SetDescription | DropExecutors;

export interface NewTaskState {
    task: Task
}



export const SetDethlineCreator = (newValue: Date): SetDethline => {
    return {
        type: SET_DETHLINE,
        newValue: newValue
    }
};

export const SetTitleCreator = (newValue: String): SetTitle => {
    return {
        type: SET_TITLE,
        newValue: newValue
    }
};

export const SetDescriptionCreator = (newValue: String): SetDescription => {
    return {
        type: SET_DESCRIPTION,
        newValue: newValue
    }
};

export const DropExecutorsCreator = (userId: String): DropExecutors => {
    return {
        type: DROP_EXECUTORS,
        userId: userId
    }
};
