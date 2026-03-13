
import { Outlet, useNavigate, NavLink } from "react-router-dom";
import { logoutadmin } from "../services/adminService";
import { 
  ShieldCheck, 
  Users, 
  Settings, 
  LogOut, 
  BarChart3, 
  Database,
  UserCircle 
} from "lucide-react";
import logoAgro from "/src/assets/logo_agro.png";
import "/src/styles/AdminLayout.css";








function AdminLayout() {
  const navigate = useNavigate();

  const getAdminData = () => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  };

  const admin = getAdminData();
  const adminName = admin?.email ? admin.email.split('@')[0].toUpperCase() : "ADMIN";

  const handleLogout = () => {
    logoutadmin();
    navigate("/");
  };

  return (
    <div className="admin-container">
      <aside className="admin-sidebar">
        <div className="admin-logo-section">
          <img src={logoAgro} alt="Logo" className="admin-logo-img" />
          <div className="admin-brand">
            <span>CULTIVOPRO</span>
            <small>CONTROL PANEL</small>
          </div>
        </div>




        <nav className="admin-nav">
          <div className="nav-label">Gestión Core</div>
          <NavLink to="/admin/dashboard" className={({isActive}) => isActive ? "admin-nav-item active" : "admin-nav-item"}>
            <BarChart3 size={18} /> <span>Estadísticas</span>
          </NavLink>
          <NavLink to="/admin/usuarios" className={({isActive}) => isActive ? "admin-nav-item active" : "admin-nav-item"}>
            <Users size={18} /> <span>Usuarios</span>
          </NavLink>
          
          <div className="nav-label">Sistema</div>
          <NavLink to="/admin/logs" className={({isActive}) => isActive ? "admin-nav-item active" : "admin-nav-item"}>
            <Database size={18} /> <span>Registros (Logs)</span>
          </NavLink>
          <NavLink to="/admin/configuracion" className={({isActive}) => isActive ? "admin-nav-item active" : "admin-nav-item"}>
            <Settings size={18} /> <span>Configuración</span>
          </NavLink>
        </nav>

        <div className="admin-footer">
          <button onClick={handleLogout} className="admin-logout-btn">
            <LogOut size={18} /> <span>Finalizar Sesión</span>
          </button>
        </div>
      </aside>

    
      <div className="admin-main">
        <header className="admin-header">
          <div className="header-left">
            <ShieldCheck size={24} color="#10b981" />
            <span className="system-status">SISTEMA SEGURO</span>
          </div>

          <div className="admin-profile">
            <div className="admin-info">
              <span className="admin-name">{adminName}</span>
              <span className="admin-role">: Super Admin</span>
            </div>
            <div className="admin-avatar-icon">
              <UserCircle size={35} />
            </div>
          </div>
        </header>

        <main className="admin-content-view">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;