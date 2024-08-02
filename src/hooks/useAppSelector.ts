import { useSelector } from 'react-redux';
import { TAppSelector } from '../types/app-selector.type';

export const useAppSelector = useSelector.withTypes <TAppSelector>();