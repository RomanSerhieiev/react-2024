import { EKey } from '../enums/local-storage-keys.enum';

export const localStorageSave = <T>(key: EKey, data: T) => {
    localStorage.setItem(key, JSON.stringify(data));
};