import api from "./api";

export const getCultivos = async () => {
  const response = await api.get("/cultivos");
  return response.data;
};

export const createCultivo = async (cultivo: {
  nombre: string;
  tipo: string;
  fechaSiembra: string;
  estado: string;
  parcela?: string;
}) => {


  const response = await api.post("/cultivos", cultivo);
  return response.data;
};



export const updateCultivo = async (id: string, cultivo: any) => {
  const response = await api.put(`/cultivos/${id}`, cultivo);
  return response.data;
};



export const deleteCultivo = async (id: string) => {
  const response = await api.delete(`/cultivos/${id}`);
  return response.data;
};





// PARA MARCAR CULTIVO COSECHADO

export const cosechaCultivo = async (id: string) => {
  const response = await api.put(`/cultivos/${id}/cosechar`);

  return response.data;

  
};

