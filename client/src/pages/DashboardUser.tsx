import { useEffect, useState } from "react";
import { getCultivos, createCultivo } from "../services/cultivoService";



function DashboardUser() {
  const [cultivos, setCultivos] = useState<any[]>([]);
  const [nuevoCultivo, setNuevoCultivo] = useState({
    nombre: "",
    tipo: "",
    fechaSiembra: "",
    estado: "Activo",
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCultivos();
      setCultivos(data);
    };
    fetchData();
  }, []);

  const handleAddCultivo = async () => {
    await createCultivo(nuevoCultivo);
    const data = await getCultivos();
    setCultivos(data);
    setNuevoCultivo({ nombre: "", tipo: "", fechaSiembra: "", estado: "Activo" });
  };

  return (
    <div>
      <h2>Panel del Usuario</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleAddCultivo(); }}>
        <input
          type="text"
          placeholder="Nombre"
          value={nuevoCultivo.nombre}
          onChange={(e) => setNuevoCultivo({ ...nuevoCultivo, nombre: e.target.value })}
        />
        <input
          type="text"
          placeholder="Tipo"
          value={nuevoCultivo.tipo}
          onChange={(e) => setNuevoCultivo({ ...nuevoCultivo, tipo: e.target.value })}
        />
        <input
          type="date"
          value={nuevoCultivo.fechaSiembra}
          onChange={(e) => setNuevoCultivo({ ...nuevoCultivo, fechaSiembra: e.target.value })}
        />
        <button type="submit">Registrar Cultivo</button>
      </form>

      <ul>
        {cultivos.map((c) => (
          <li key={c._id}>{c.nombre} - {c.estado}</li>
        ))}
      </ul>
    </div>
  );
}

export default DashboardUser;