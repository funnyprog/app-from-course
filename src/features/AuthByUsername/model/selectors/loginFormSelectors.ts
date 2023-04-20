import { StoreScheme } from 'app/providers/StoreProvider/types/StoreScheme';

export const getLoginFormUsername = (state: StoreScheme) => state?.loginForm?.username || '';
export const getLoginFormPassword = (state: StoreScheme) => state?.loginForm?.password || '';
export const getLoginFormIsLoading = (state: StoreScheme) => state?.loginForm?.isLoading || false;
export const getLoginFormError = (state: StoreScheme) => state?.loginForm?.error || null;
