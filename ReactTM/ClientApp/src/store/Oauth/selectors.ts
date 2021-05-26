import { ApplicationState } from '..';

export const tokenSelector = (state: ApplicationState) => state.oauth.token;
export const userDescription = (state: ApplicationState) => state.oauth.userDescription;
