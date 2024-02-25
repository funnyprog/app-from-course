import { StoreScheme } from 'app/providers';

export const getProfileReadonly = (state: StoreScheme) => state.profile?.readonly;
