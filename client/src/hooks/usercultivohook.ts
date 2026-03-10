import { useEffect, useState } from "react";
import { getCultivos, createCultivo, cosechaCultivo } from "../services/cultivoService";


interface Cultivo {
    fechaSiembra: string | number | Date;
    _id: string;
    nombre: string;
    tipo: string;
    estado: string;
}


interface NuevoCultivo {
    nombre: string;
    tipo: string;
    fechaSiembra: string;
    estado: string;
}




export const useCultivoHook = () => {
const [cultivos, setCultivos] = useState<Cultivo[]>([]);
const [nuevoCultivo, setNuevoCultivo] = useState<NuevoCultivo>({
    nombre: "",
    tipo: "",
    fechaSiembra: "",
    estado: "Activo",
});


const fetchCultivos = async () => {
    const data = await getCultivos();
    setCultivos(data);
};

useEffect(() => {
    fetchCultivos();
}, []);



const handleAddCultivo = async () => {
    await createCultivo(nuevoCultivo);
    await fetchCultivos();
    setNuevoCultivo({nombre: "", tipo: "", fechaSiembra: "", estado: "Activo"});
};


const handleCosechar = async (id: string) => {
    await cosechaCultivo(id);
    await fetchCultivos();
};



return {
    cultivos,
    nuevoCultivo,
    setNuevoCultivo,
    handleAddCultivo,
    handleCosechar,
    };
};