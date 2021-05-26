import {
    DropExecutors,
    NewTaskActionTypes,
    SetDescription,
    SetDethline,
    SetTitle,
    NewTaskState
} from "./types";

import {
    SET_DETHLINE,
    SET_TITLE,
    SET_DESCRIPTION,
    DROP_EXECUTORS
} from './actionTypes'

import { Note } from "../../models";

const initialState = {
    task: {
        autorId: '',
        executors: new Array<String>(),
        title: 'нования задача',
        deathline: new Date(),
        description: '',
        createDate: new Date(),
        notes: new Array<Note>(),
    }
} as NewTaskState;

const SetDethlineAction = (state: NewTaskState, action: SetDethline): NewTaskState => {
    return {
        ...state, task: { ...state.task, deathline: action.newValue }
    }
}

const SetTitleAction = (state: NewTaskState, action: SetTitle): NewTaskState => {
    return {
        ...state, task: { ...state.task, title: action.newValue }
    }
}

const SetDescriptionAction = (state: NewTaskState, action: SetDescription): NewTaskState => {
    return {
        ...state, task: { ...state.task, description: action.newValue }
    }
}

const DropExecutorsAction = (state: NewTaskState, action: DropExecutors): NewTaskState => {
    return {
        ...state, task: {
            ...state.task,
            executors: state.task.executors.filter(e => e !== action.userId)
        }
    }
}

export const NewTaskReduser = (state = initialState, action: NewTaskActionTypes): NewTaskState => {
    switch (action.type) {
        case SET_DETHLINE: return SetDethlineAction(state, action as SetDethline);
        case SET_TITLE: return SetTitleAction(state, action as SetTitle);
        case SET_DESCRIPTION: return SetDescriptionAction(state, action as SetDescription);
        case DROP_EXECUTORS: return DropExecutorsAction(state, action as DropExecutors);
        default:
            return state
    }
}
