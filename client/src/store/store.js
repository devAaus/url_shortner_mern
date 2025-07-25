import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";

const store = configureStore({
   reducer: {
      auth: authReducer,
   },
   devTools: import.meta.env.NODE_ENV !== "production",
})

export default store;