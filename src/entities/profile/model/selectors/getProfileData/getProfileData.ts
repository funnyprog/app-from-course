import { StoreScheme } from 'app/providers';

export const getProfileData = (state: StoreScheme) => state.profile?.data || undefined;
