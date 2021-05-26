import { Token, User, UserDescription, PaginationResponse } from '../models';
import { axiosApiInstance } from './apiFunction'

const userControllerUrl = 'admin/User'; 
const apiFinctions = {
    getAllUsers: async (skip: number, take: number) => {
        const result = await axiosApiInstance.get<PaginationResponse<Array<User>>>(`${userControllerUrl}?skip=${skip}&take=${take}`);
        return result.data;
    },
    deleteUser: async (userId: String) => {
        const uri = `${userControllerUrl}?userId=${userId}`;
        const result = await axiosApiInstance.delete(uri);
        return result.data;
    },
    addUser: async (user: User) => {
        const result = await axiosApiInstance.post(userControllerUrl, user);
        return result.data;
    },
    updateUser: async (user: User) => {
        const result = await axiosApiInstance.put(userControllerUrl, user);
        return result.data;
    }
}

export default apiFinctions;