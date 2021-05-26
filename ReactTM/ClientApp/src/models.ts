
export interface Token {
    access: String,
    refresh: String,
}
export interface OauthState {
    token: Token,
    isLogined: Boolean,
    currentUser: UserDescription
}

export interface UserDescription {
    id: String,
    name: String,
    isAdmin: Boolean
}

export interface User {
    id: string,
    name: string,
    login: string,
    password: string
    role: string
}

export interface Note {
    autorId: String,
    title: String,
    createDate: Date,
}

export interface Task {
    autorId: String,
    executors: Array<String>,
    title: String,
    deathline: Date,
    description: String,
    createDate: Date,
    notes: Array<Note>,
}

export interface PaginationResponse<T> {
    skip: number,
    take: number,
    total: number,
    items: T
}