import { EKey } from '../enums/local-storage-keys.enum';
import { retrieveLocalStorageData } from './retrieve-local-storage-data.helper';
import { localStorageSave } from './local-storage-save.helper';

export const retrieveOrSaveLocalStorageData = (key: EKey, defaultValue: number): number => {
    if (retrieveLocalStorageData<number>(key)) {
        return retrieveLocalStorageData<number>(key)
    } else {
        localStorageSave(key, defaultValue)
        return retrieveLocalStorageData<number>(key)
    }
};