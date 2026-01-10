import { configureStore } from "@reduxjs/toolkit";
import FruitReducer from "./FruitSlice";
import ApiFruitSlice from "./ApiFruitSlice"
import CartSlice from "./CartSlice"
export const Store = configureStore({
  reducer: {
    fruit: FruitReducer,
    fruitApi: ApiFruitSlice,
    cart: CartSlice,
  },
});
