import { User } from "../../../../models";

export interface UserProps {
    user: User,
    setName: Function,
    setLogin: Function,
    setPassword: Function,
    setRole: Function,
    addUser: Function,
}