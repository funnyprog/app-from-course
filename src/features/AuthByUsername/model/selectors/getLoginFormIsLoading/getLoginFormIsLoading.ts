import { StoreScheme } from 'app/providers';

export const getLoginFormIsLoading = (state: StoreScheme) => state?.loginForm?.isLoading || false;
