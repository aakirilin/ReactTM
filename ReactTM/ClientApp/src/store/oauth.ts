import { Token, OauthState, UserDescription } from '../models';

function GetState() {
    const state = {
        token: {
            access: '',
            refresh:''
        },
        isLogined: false,
        currentUser: {
            id: '',
            name: '',
            isAdmin: false
        }
    } as OauthState;
    return () => state;
}

const _state = GetState();

const State = {
    token: {
        access: () => _state().token.access,
        refresh: () => _state().token.refresh,
        set: (value: Token | undefined) => {
            _state().token = value;
            _state().isLogined = true;
        }
    },
    isLogined: () => _state().isLogined,
    setNotLogined: () => { _state().isLogined = false },
    currentUser: {
        set: (value: UserDescription) => { _state().currentUser = value },
        name: () => _state().currentUser.name,
        id: () => _state().currentUser.id,
        isAdmin: () => _state().currentUser.isAdmin,
    }
};

export default State;