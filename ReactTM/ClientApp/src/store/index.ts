import * as WeatherForecasts from './WeatherForecasts';
import * as Counter from './Counter';
import { NewTaskReduser } from './NewTask/reducer';
import { NewTaskState } from './NewTask/types';
import { OauthState } from './Oauth/types';
import { OauthReduser } from './Oauth/reducer';
import { AdminUserState } from './Admin/User/types';
import { AdminUserReduser } from './Admin/User/reducer';

// The top-level state object
export interface ApplicationState {
    adminUser: AdminUserState,
    newTask: NewTaskState,
    oauth: OauthState,
    counter: Counter.CounterState | undefined;
    weatherForecasts: WeatherForecasts.WeatherForecastsState | undefined;
}

// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
    adminUser: AdminUserReduser,
    oauth: OauthReduser,
    newTask: NewTaskReduser,
    counter: Counter.reducer,
    weatherForecasts: WeatherForecasts.reducer
};

// This type can be used as a hint on action creators so that its 'dispatch' and 'getState' params are
// correctly typed to match your store.
export interface AppThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}
