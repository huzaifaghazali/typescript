import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/theme/themeSlice';
import cartReducer from './features/cart/cartSlice';
import userReducer from './features/user/userSlice';

export const store = configureStore({
  reducer: {
    themeState: themeReducer,
    cartState: cartReducer,
    userState: userReducer,
  },
});

/**
 * We define three types: RootState, AppDispatch, and ReduxStore.
 * RootState is the type of the state of the store, which is an object with three properties.
 * AppDispatch is the type of the dispatch function of the store, which is a function that takes an action and returns a new state.
 * ReduxStore is the type of the store itself, which is an object with a getState function and a dispatch function.
 */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ReduxStore = {
  getState: () => RootState;
  dispatch: AppDispatch;
};
