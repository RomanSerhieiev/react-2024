import { useDispatch } from 'react-redux';
import { TAppDispatch } from '../types/app-dispatch.type';

export const useAppDispatch = useDispatch.withTypes<TAppDispatch>()