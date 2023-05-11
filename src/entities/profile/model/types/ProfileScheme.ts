export interface Profile {
    firstname: string,
    lastname: string,
    age: number,
    currency: string,
    country: string,
    city: string,
    username: string,
    avatar: string | null
}

export interface ProfileScheme {
    isLoading: boolean
    data?: Profile
    error?: string
    readonly: boolean
}
