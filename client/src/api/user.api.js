import axiosInstance from "@/utils/axiosInstance";

export const login = async (email, password) => {
   const { data } = await axiosInstance.post("/api/auth/login", {
      email,
      password,
   });
   return data;
}

export const register = async (name, email, password) => {
   const { data } = await axiosInstance.post("/api/auth/register", {
      name,
      email,
      password,
   });
   return data;
}

export const logout = async () => {
   const { data } = await axiosInstance.get("/api/auth/logout");
   return data;
}

export const getCurrentUser = async () => {
   const { data } = await axiosInstance.get("/api/auth/me");
   return data;
}