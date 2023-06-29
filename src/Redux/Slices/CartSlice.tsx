import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface ICartState {
  quantity: number;
  items: Array<Item>;
}

export interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const quantity = localStorage.getItem("cart.quantity");
const items = localStorage.getItem("cart.items");

const initialState: ICartState = {
  quantity: quantity ? parseInt(quantity) : 0,
  items: items ? JSON.parse(items) : new Array<Item>(),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<Item>): void => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index === -1) {
        state.quantity += 1;
        localStorage.setItem("cart.quantity", state.quantity.toString());
        state.items.push(action.payload);
        localStorage.setItem("cart.items", JSON.stringify(state.items));
      } else {
        state.items[index].quantity = action.payload.quantity;
      }
    },
    removeItemFromCart: (state, action: PayloadAction<Item>): void => {
      state.quantity -= 1;
      localStorage.setItem("cart.quantity", state.quantity.toString());
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cart.items", JSON.stringify(state.items));
    },
    addQuantityToItem: (state, action: PayloadAction<Item>): void => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity += 1;
        }
        return item;
      });
      localStorage.setItem("cart.items", JSON.stringify(state.items));
    },
    removeQuantityToItem: (state, action: PayloadAction<Item>): void => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity -= 1;
        }
        return item;
      });
      localStorage.setItem("cart.items", JSON.stringify(state.items));
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addItemToCart,
  addQuantityToItem,
  removeItemFromCart,
  removeQuantityToItem,
} = cartSlice.actions;

export default cartSlice.reducer;
