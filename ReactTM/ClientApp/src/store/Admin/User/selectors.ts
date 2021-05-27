import { ApplicationState } from '../..';

export const getUser = (state: ApplicationState) => state.adminUser.user;
