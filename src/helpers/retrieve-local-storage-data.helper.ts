import { EKey } from '../enums/local-storage-keys.enum';

export const retrieveLocalStorageData = <T>(key: EKey) => {
    const pairJSON = localStorage.getItem(key) || '';

    if (!pairJSON) {
        return {} as T;
    }

    const pair = JSON.parse(pairJSON);

    return pair as T;
}