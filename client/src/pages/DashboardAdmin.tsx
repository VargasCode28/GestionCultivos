import { useState } from "react";
import { registerUser } from "../services/adminService";

function DashboardAdmin() {
  const [newUser, setNewUser] = useState({ email: "", password: "", rol: "user" });



  const handleRegister = async () => {
    try {
      await registerUser(newUser);
      alert("✅ Usuario registrado correctamente");
      setNewUser({ email: "", password: "", rol: "user" });
    } catch (error: any) {
      alert("❌ Error al registrar usuario: " + (error.response?.data?.error || "Desconocido"));
    }
  };






  
  return (
    <div>
      <h2>Panel del Administrador</h2>
      <h3>Registrar nuevo usuario</h3>
      <input
        type="email"
        placeholder="Correo"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={newUser.password}
        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
      />
      <select
        value={newUser.rol}
        onChange={(e) => setNewUser({ ...newUser, rol: e.target.value })}
      >
        <option value="user">Usuario</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={handleRegister}>Registrar</button>
    </div>
  );
}



export default DashboardAdmin;