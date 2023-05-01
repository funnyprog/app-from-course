import { StoreScheme } from 'app/providers';

export const getLoginFormUsername = (state: StoreScheme) => state?.loginForm?.username || '';
