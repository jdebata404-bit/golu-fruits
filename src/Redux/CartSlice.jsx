import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [],
};

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.item.find((elem) => elem.id === action.payload);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.item.push({ ...action.payload, quantity: 1 });
      }

      //   state.item.push(action.payload);
    },
    removeCart: (state, action) => {
      state.item = state.item.filter((elem) => elem.id !== action.payload);
    },

    incQuantity: (state, action) => {
      const existing = state.item.find((elem) => elem.id === action.payload);

      if (existing) {
        existing.quantity += 1;
      }
    },

    decQuantity: (state, action) => {
      const existing = state.item.find((elem) => elem.id === action.payload);

      if (existing && existing.quantity > 1) {
        existing.quantity -= 1;
      }
    },
  },
});

export default CartSlice.reducer;
export const { addToCart, removeCart, incQuantity, decQuantity } =
  CartSlice.actions;
