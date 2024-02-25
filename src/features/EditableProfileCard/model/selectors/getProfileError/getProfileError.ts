import { StoreScheme } from 'app/providers';

export const getProfileError = (state: StoreScheme) => state.profile?.error || undefined;
