import { useSelector } from 'react-redux';
import { REDUCER_TYPES as TYPES } from '../data/reducers';

export const useCustomSelector = <T>(type: keyof REDUCER_TYPES): T => {
  return useSelector<REDUCER_TYPES, T>((s: REDUCER_TYPES) => s[type] as unknown as T)
}

export type REDUCER_TYPES = TYPES;
export { useDispatch } from 'react-redux';
export * from '../data/actions';