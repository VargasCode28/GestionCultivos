// src/services/adminService.ts
// import api from "./api";

// export const registerUser = async (user: { email: string; password: string; rol: string }) => {
//   const response = await api.post("/auth/register", user);
//   return response.data;
// };



import api from "./api";

export const registerUser = async (user: { email: string; password: string; rol: string }) => {
  const response = await api.post("/auth/register", user);
  return response.data;
};