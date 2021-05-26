import {
    OauthActionTypes,
    SetToken,
    SetDescription,
    OauthState
} from './types';

import {
    SET_DESCRIPTION,
    SET_TOKEN
} from './actionTypes'

import { Token, UserDescription } from '../../models';

const initialState = {
    token: undefined,
    userDescription: undefined
} as OauthState;

const SetTokenAction = (state: OauthState, action: SetToken): OauthState => {
    return {
        ...state, token: action.newValue
    }
}

const SetDescriptionAction = (state: OauthState, action: SetDescription): OauthState => {
    return {
        ...state, userDescription: action.newValue
    }
}

export const OauthReduser = (state = initialState, action: OauthActionTypes): OauthState => {
    switch (action.type) {
        case SET_TOKEN: return SetTokenAction(state, action as SetToken);
        case SET_DESCRIPTION: return SetDescriptionAction(state, action as SetDescription);
        default:
            return state
    }
}
