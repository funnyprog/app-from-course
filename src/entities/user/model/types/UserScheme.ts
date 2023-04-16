export interface User {
    id: number
    username: string
    password: string
}

export interface UserScheme {
    authData?: User
}
