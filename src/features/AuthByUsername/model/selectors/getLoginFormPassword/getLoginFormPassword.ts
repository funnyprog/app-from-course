import { StoreScheme } from 'app/providers';

export const getLoginFormPassword = (state: StoreScheme) => state?.loginForm?.password || '';
