import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const getAuthFromCookies = () => {
   try {
      const auth = Cookies.get("auth");
      if (auth) {
         const parsed = JSON.parse(auth);
         return {
            user: parsed.user || null,
            isAuthenticated: parsed.isAuthenticated || false,
         }
      }
   } catch (error) {
      console.error("Error getting user from cookies:", error);
      return null;
   }

   return {
      user: null,
      isAuthenticated: false,
   }
}

const initialState = getAuthFromCookies();

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      login: (state, action) => {
         state.user = action.payload;
         state.isAuthenticated = true;

         Cookies.set("auth", JSON.stringify({
            user: action.payload,
            isAuthenticated: true,
         }), { expires: 7 })
      },
      logout: (state) => {
         state.user = null;
         state.isAuthenticated = false;

         Cookies.remove("auth");
      },
   }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;