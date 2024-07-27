import { tokenPair } from '../constants/token-pair';

export const localStorageSave = <T>(data: T) => {
    localStorage.setItem(tokenPair, JSON.stringify(data));
}