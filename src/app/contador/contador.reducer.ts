import { createReducer, on } from '@ngrx/store';
import { decrement, divide, increment, multiply, reset } from './contador.action';

export const initialState = 0;

const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(multiply, (state, {numero}) => state * numero),
  on(divide, (state, {numero}) => state / numero),
  on(reset, (state) => state = initialState)
);

export function contadorReducer(state, action) {
  return counterReducer(state, action);
}
