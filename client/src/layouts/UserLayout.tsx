import { Outlet, useNavigate, NavLink } from "react-router-dom";
import { logout } from "../services/authService";
import logoAgro from "/src/assets/logo_agro.png";
import "/src/styles/UserLayout.css";

// FOR THE ICONOS 

import { 
  LayoutDashboard, 
  Sprout, 
  User, 
  LogOut, 
  Bell, 
  CheckCircle2 
} from "lucide-react";







function UserLayout() {
  const navigate = useNavigate();


  const getStoredUser = () => {
    try {
      const savedUser = window.localStorage.getItem("user");
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (e) { return null; }
  };

  const user = getStoredUser();
  
  const emailRaw = user?.email || "usuario@campo.com";
  const emailName = emailRaw.split('@')[0];
  const userName = emailName.charAt(0).toUpperCase() + emailName.slice(1).replace(/[._]/g, ' ');
  const firstName = userName.split(" ")[0];
  const initials = userName.substring(0, 2).toUpperCase();



  const handleLogout = () => {
    logout();
    navigate("/");
  };





  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <img src={logoAgro} alt="CultivoPro" className="sidebar-logo" />
          <h1 className="brand-name">CultivoPro</h1>
        </div>

        <nav className="sidebar-nav">
          <NavLink to="/user" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
            <LayoutDashboard size={20} strokeWidth={2} /> 
            <span>Tareas</span>
          </NavLink>
          
          <NavLink to="/user/mis-cultivos" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
            <Sprout size={20} strokeWidth={2} /> 
            <span>Mis Cultivos</span>
          </NavLink>
          
          <NavLink to="/user/perfil" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
            <User size={20} strokeWidth={2} /> 
            <span>Mi Perfil</span>
          </NavLink>
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>
            <LogOut size={18} />
            <span>Cerrar Sesión</span>
          </button>
        </div>
      </aside>

      <main className="main-content">
        <header className="top-bar">
          <div className="top-bar-info">
            <h1>Hola, {firstName} 👋</h1>
            <p>Panel de gestión agrícola inteligente</p>
          </div>
          
          <div className="user-badge-container">
            <button className="notification-btn">
                <Bell size={20} color="#64748b" />
            </button>

            <div className="status-indicator">
                <CheckCircle2 size={14} color="#22c55e" />
                <span>Sistema Activo</span>
            </div>

            <div className="user-profile-summary">
                <div className="user-avatar">{initials}</div>
                <div className="user-name-role">
                    <span className="name">{userName}</span>
                    <span className="role">Encargado de Campo</span>
                </div>
            </div>
          </div>
        </header>

        <section className="content-area">
          <Outlet />
        </section>
      </main>
    </div>
  );
}



export default UserLayout;