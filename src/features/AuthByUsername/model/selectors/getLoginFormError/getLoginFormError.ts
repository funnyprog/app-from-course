import { StoreScheme } from 'app/providers';

export const getLoginFormError = (state: StoreScheme) => state?.loginForm?.error || undefined;
