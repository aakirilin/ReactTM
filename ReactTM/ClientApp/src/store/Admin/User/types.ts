import { User, NewUser } from '../../../models';
import { SET_USER, SET_LOGIN, SET_NAME, SET_PASSWORD, SET_ROLE, RELOAD_USER } from './actionTypes'
import { Action, Reducer } from 'redux';
import { AppThunkAction } from '../../';
import api from '../../../api/adminApi';

export interface SetUser {
    type: typeof SET_USER,
    newValue: User
}

export interface ReloadUser {
    type: typeof RELOAD_USER
}

export interface SetLogin {
    type: typeof SET_LOGIN,
    newValue: string
}

export interface SetName {
    type: typeof SET_NAME,
    newValue: string
}

export interface SetPassword {
    type: typeof SET_PASSWORD,
    newValue: string
}

export interface SetRole {
    type: typeof SET_ROLE,
    newValue: string
}

export type AdminUserActionTypes = SetUser | ReloadUser | SetLogin | SetName | SetPassword | SetRole;

export interface AdminUserState {
    user: User,
    wasLoad: Boolean
}



export const SetUserCreator = (newValue: User): SetUser => {
    return {
        type: SET_USER,
        newValue: newValue
    }
};

export const NewUserCreator = (): ReloadUser => {
    return {
        type: RELOAD_USER
    }
};

export const SetLoginCreator = (newValue: string): SetLogin => {
    return {
        type: SET_LOGIN,
        newValue: newValue
    }
};

export const SetNameCreator = (newValue: string): SetName => {
    return {
        type: SET_NAME,
        newValue: newValue
    }
};

export const SetPasswordCreator = (newValue: string): SetPassword => {
    return {
        type: SET_PASSWORD,
        newValue: newValue
    }
};


export const SetRoleCreator = (newValue: string): SetRole => {
    return {
        type: SET_ROLE,
        newValue: newValue
    }
};

export const LoadUserCreator = (userId: string, wasLoad: Boolean, setWasLoad: Function): AppThunkAction<AdminUserActionTypes> => (dispatch, getState) => {
    if (!wasLoad) {
        if (userId === 'new') {
            dispatch(SetUserCreator(NewUser()));
        }
        else {
            api.user.get(userId)
                .then(user => { dispatch(SetUserCreator(user)) });
        }
        setWasLoad(true);
    }
}