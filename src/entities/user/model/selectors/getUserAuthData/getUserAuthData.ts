import { StoreScheme } from 'app/providers/StoreProvider/types/StoreScheme';

export const getUserAuthData = (state: StoreScheme) => state.user.authData;
