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
    profileData?: Profile
    error?: string
    readonly: boolean
}
