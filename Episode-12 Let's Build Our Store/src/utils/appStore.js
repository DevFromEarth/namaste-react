import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

console.log("In appStore : ", appStore);
console.log("In appStore, cartReducer : ", cartReducer);

export default appStore;
