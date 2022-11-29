import { CartActionTypes, CartActions } from './../actions/cart-actions';
import { Action } from '@ngrx/store';
import { IProduct } from './../../models/product';
export let initialState: IProduct[] = [];

export function cartReducer(state = initialState, action: CartActions) {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      return [...state, action.payload];
    case CartActionTypes.REMOVE_PRODUCT:
      return state.filter((p) => p.id !== action.payload.id);
    default:
      return state;
  }
} 
