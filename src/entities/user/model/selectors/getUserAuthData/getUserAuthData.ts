import { StoreScheme } from 'app/providers';

export const getUserAuthData = (state: StoreScheme) => state.user.authData;
