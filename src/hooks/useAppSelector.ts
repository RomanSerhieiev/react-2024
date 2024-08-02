import { useSelector } from 'react-redux';
import { TRootState } from '../types/root-state.type';

export const useAppSelector = useSelector.withTypes <TRootState>();