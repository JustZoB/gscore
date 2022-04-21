import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

type BurgerMenuState = {
  isBurgerMenuShown: boolean;
}

const burgerMenuAdapter = createEntityAdapter<BurgerMenuState>();

const burgerMenuSlice = createSlice({
  name: 'burgerMenuSlice',
  initialState: burgerMenuAdapter.getInitialState<BurgerMenuState>({
    isBurgerMenuShown: false,
  }),
  reducers: {
    openBurgerMenu: (state) => {
      state.isBurgerMenuShown = true
    },
    closeBurgerMenu: (state) => {
      state.isBurgerMenuShown = false
    }
  },
});

export const {
  openBurgerMenu,
  closeBurgerMenu,
} = burgerMenuSlice.actions;

export default burgerMenuSlice.reducer;
