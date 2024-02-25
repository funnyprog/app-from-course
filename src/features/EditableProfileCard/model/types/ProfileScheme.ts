import { ProfileData } from 'shared/types';

export interface ProfileScheme {
    isLoading: boolean
    data?: ProfileData
    error?: string
    readonly: boolean
}
