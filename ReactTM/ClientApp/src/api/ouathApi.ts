import { Token, UserDescription } from '../models';
import { axiosApiInstance } from './apiFunction'

const apiFinctions = {
    loginRequest: async (login: String, password: String) => {
        let data = {
            login: login,
            password: password
        }
        let token = await axiosApiInstance.post<Token>('Login', data);
        return token.data;
    },
    userDescription: async (userId: String = 'current') => {
        let url = `UserDescription?id=${userId}`;
        let result = await axiosApiInstance.get<UserDescription>(url);
        return result.data;
    }
}

export default apiFinctions;