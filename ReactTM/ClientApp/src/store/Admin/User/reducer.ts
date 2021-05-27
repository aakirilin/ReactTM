import {
    SetUser,
    ReloadUser,
    SetLogin,
    SetName,
    SetPassword,
    SetRole,
    AdminUserActionTypes,
    AdminUserState
} from "./types";

import { SET_USER, SET_LOGIN, SET_NAME, SET_PASSWORD, SET_ROLE, RELOAD_USER } from './actionTypes'

import { NewUser as CreateNewUser, Note } from "../../../models";

const initialState = {
    user: CreateNewUser(),
    wasLoad: false
} as AdminUserState;

const SetUserAction = (state: AdminUserState, action: SetUser): AdminUserState => {
    return {
        ...state, user: action.newValue, wasLoad: true
    }
}

const ReloadUserAction = (state: AdminUserState, action: ReloadUser): AdminUserState => {
    return {
        ...state, wasLoad: false
    }
}

const SetLoginAction = (state: AdminUserState, action: SetLogin): AdminUserState => {
    return {
        ...state, user: { ...state.user, login: action.newValue }
    }
}

const SetNameAction = (state: AdminUserState, action: SetName): AdminUserState => {
    return {
        ...state, user: { ...state.user, name: action.newValue }
    }
}

const SetPasswordAction = (state: AdminUserState, action: SetPassword): AdminUserState => {
    return {
        ...state, user: { ...state.user, password: action.newValue }
    }
}

const SetRoleAction = (state: AdminUserState, action: SetRole): AdminUserState => {
    return {
        ...state, user: { ...state.user, role: action.newValue }
    }
}


export const AdminUserReduser = (state = initialState, action: AdminUserActionTypes): AdminUserState => {
    switch (action.type) {
        case SET_USER: return SetUserAction(state, action as SetUser);
        case RELOAD_USER: return ReloadUserAction(state, action as ReloadUser);
        case SET_LOGIN: return SetLoginAction(state, action as SetLogin);
        case SET_NAME: return SetNameAction(state, action as SetName);
        case SET_PASSWORD: return SetPasswordAction(state, action as SetPassword);
        case SET_ROLE: return SetRoleAction(state, action as SetRole);
        default:
            return state
    }
}
