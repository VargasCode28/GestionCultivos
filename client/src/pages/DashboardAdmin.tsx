import { useState } from "react";
import { registerUser } from "../services/adminService";
import {UserPlus, Mail, Lock, Shield, UserCheck } from "lucide-react";
import "/src/styles/DashboardAdmin.css";


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
    <div className="admin-dashboard-view">
      {/* TÍTULO DE SECCIÓN */}
      <header className="view-header">
        <div>
          <h2>Gestión de Usuarios</h2>
          <p>Crea y administra las credenciales de acceso al sistema.</p>
        </div>
      </header>

      <div className="admin-main-grid">
      
        <section className="admin-card registration-card">
          <div className="admin-card-header">
            <UserPlus size={20} />
            <h3>Registrar Nuevo Usuario</h3>
          </div>

          <form onSubmit={handleRegister} className="admin-pro-form">
            <div className="admin-form-group">
              <label><Mail size={14} /> Correo Electrónico</label>
              <input
                type="email"
                placeholder="ejemplo@cultivopro.com"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                required
              />
            </div>

            <div className="admin-form-group">
              <label><Lock size={14} /> Contraseña Temporal</label>
              <input
                type="password"
                placeholder="••••••••"
                value={newUser.password}
                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                required
              />
            </div>

            <div className="admin-form-group">
              <label><Shield size={14} /> Nivel de Acceso (Rol)</label>
              <select
                value={newUser.rol}
                onChange={(e) => setNewUser({ ...newUser, rol: e.target.value })}
              >
                <option value="user">Usuario (Operador)</option>
                <option value="admin">Administrador (Gestión)</option>
              </select>
            </div>

            <button type="submit" className="admin-btn-primary">
              <UserCheck size={18} />
              Confirmar Registro
            </button>
          </form>
        </section>

      
        <section className="admin-info-helper">
          <div className="helper-card">
            <h4>Seguridad de Cuentas</h4>
            <p>Al registrar un nuevo usuario, asegúrese de asignar el rol correcto. Los <strong>Administradores</strong> tienen permisos para eliminar datos y gestionar otros usuarios.</p>
            <ul className="helper-list">
              <li>Mínimo 8 caracteres para contraseñas.</li>
              <li>Use correos institucionales preferentemente.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}





export default DashboardAdmin;