import { Token, User, UserDescription, PaginationResponse } from '../models';
import { axiosApiInstance } from './apiFunction'

const userControllerUrl = 'admin/User'; 
const usersControllerUrl = 'admin/Users'; 

const apiFinctions = {
    user: {
        get: async (userId: string) => {
            const result = await axiosApiInstance.get<User>(`${userControllerUrl}?userId=${userId}`);
            return result.data;
        },
        delete: async (userId: String) => {
            const uri = `${userControllerUrl}?userId=${userId}`;
            const result = await axiosApiInstance.delete(uri);
            return result.data;
        },
        add: async (user: User) => {
            const result = await axiosApiInstance.post(userControllerUrl, user);
            return result.data;
        },
        update: async (user: User) => {
            const result = await axiosApiInstance.put(userControllerUrl, user);
            return result.data;
        },
        getAll: async (skip: number, take: number) => {
            const result = await axiosApiInstance.get<PaginationResponse<Array<User>>>(`${usersControllerUrl}?skip=${skip}&take=${take}`);
            return result.data;
        },
    }
}

export default apiFinctions;