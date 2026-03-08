import api from "./api";


export const registerUser = async (user: { email: string; password: string; rol: string }) => {
  const response = await api.post("/auth/register", user);
  return response.data;
};



export const logoutadmin = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
}