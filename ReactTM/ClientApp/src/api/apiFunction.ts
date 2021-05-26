import axios from 'axios';
import { Token } from '../models';
import OauthState from '../store/oauth';

export const axiosApiInstance = axios.create();

axiosApiInstance.interceptors.request.use(
    async config => {
        config.headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + OauthState.token.access(), 
        }
        config.baseURL = '/api/';
        return config;
    },
    error => {
        Promise.reject(error)
    }
);

axiosApiInstance.interceptors.response.use(
    response => response,
    error => {
        const status = error.response ? error.response.status : null;

        if(status === 401) {
            return RefreshToken().then(() => {
                error.config.headers['Authorization'] = 'Bearer ' + OauthState.token.access();
                error.config.baseURL = undefined;
                return axios.request(error.config);
            })
            .catch(err => err);
        }

        return Promise.reject(error);
    }
);

async function RefreshToken() {
    const url = 'Refresh';
    const data = { refreshToken: OauthState.token.refresh() }
    const response = await axiosApiInstance.post<Token>(url, data);
    if (response && response.status === 200 && response.data) {
        OauthState.token.set(response.data);
    }
    else {
        throw new Error(response.statusText);
    }
}