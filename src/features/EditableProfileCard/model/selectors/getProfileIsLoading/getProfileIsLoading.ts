import { StoreScheme } from 'app/providers';

export const getProfileIsLoading = (state: StoreScheme) => state.profile?.isLoading || false;
