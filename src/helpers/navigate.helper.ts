import { EKey } from '../enums/local-storage-keys.enum';
import { localStorageSave } from './local-storage-save.helper';
import { retrieveLocalStorageData } from './retrieve-local-storage-data.helper';

export const navigateHelper = (
    key: EKey,
    id: number,
    endpoint: string,
    setter: (retriever: number) => void,
    navigate: (endpoint: string) => void
) => {
    localStorageSave<number>(key, id);
    setter(retrieveLocalStorageData<number>(key));
    navigate(`${endpoint}/${id}`);
};