import { Token, UserDescription } from '../../models';
import { AUTH } from './actionTypes'


export interface SetToken {
    type: typeof SET_TOKEN,
    newValue: Token
}

export interface SetDescription {
    type: typeof SET_DESCRIPTION,
    newValue: UserDescription
}

export type OauthActionTypes = SetToken | SetDescription;

export interface OauthState {
    token: Token | undefined,
    userDescription: UserDescription | undefined
}

export const SetTokenCreator = (newValue: Token): SetToken => {
    return {
        type: SET_TOKEN,
        newValue: newValue
    }
};

export const SetUserDescriptionCreator = (newValue: UserDescription): SetDescription => {
    return {
        type: SET_DESCRIPTION,
        newValue: newValue
    }
};
