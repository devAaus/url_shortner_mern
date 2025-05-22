
import { getCurrentUser } from "@/api/user.api";
import { login, logout } from "@/store/slice/authSlice";
import { redirect } from "@tanstack/react-router"

export const checkAuth = async ({ context }) => {
   const { queryClient, store } = context;
   try {
      const { user } = await queryClient.ensureQueryData({
         queryKey: ["currentUser"],
         queryFn: getCurrentUser
      });

      if (!user) return false;
      store.dispatch(login(user))

      const { isAuthenticated } = store.getState().auth
      if (!isAuthenticated) return false;
      return true
   } catch (error) {
      store.dispatch(logout());
      console.error("Error in checkAuth:", error);
      return redirect({ to: "/login" })
   }
}