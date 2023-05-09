import axios from 'axios';
import { LocalStorageKeysEnum } from 'shared/enums';

export const api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(LocalStorageKeysEnum.USER),
    },
});
