import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface CartItem {
  id: string;
  name: string;
  mainImage: string;
  price: {currency: string; amount: string};
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem & {quantity: number}>) {
      const existingItem = state.items.find(
        item => item.id === action.payload.id,
      );

      const priceAmount = parseFloat(action.payload.price.amount); // Convert to number
      if (isNaN(priceAmount)) {
        console.error('Invalid price amount');
        return;
      }

      if (existingItem) {
        // Increase quantity by the value provided in the payload
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push({
          ...action.payload,
          quantity: action.payload.quantity, // Set initial quantity as per payload
        });
      }

      // Add the price multiplied by the quantity added
      state.totalAmount += priceAmount * action.payload.quantity;
    },

    removeFromCart(state, action: PayloadAction<string>) {
      const itemIndex = state.items.findIndex(
        item => item.id === action.payload,
      );

      if (itemIndex > -1) {
        const item = state.items[itemIndex];
        const priceAmount = parseFloat(item.price.amount); // Convert to number
        if (isNaN(priceAmount)) {
          console.error('Invalid price amount');
          return;
        }

        state.totalAmount -= priceAmount * item.quantity;
        state.items.splice(itemIndex, 1);
      }
    },

    incrementQuantity(state, action: PayloadAction<string>) {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        const priceAmount = parseFloat(item.price.amount);
        if (!isNaN(priceAmount)) {
          item.quantity += 1;
          state.totalAmount += priceAmount;
        }
      }
    },

    decrementQuantity(state, action: PayloadAction<string>) {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        const priceAmount = parseFloat(item.price.amount);
        if (!isNaN(priceAmount)) {
          item.quantity -= 1;
          state.totalAmount -= priceAmount;
        }
      }
    },

    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
