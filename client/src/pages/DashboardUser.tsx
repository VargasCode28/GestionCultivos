import {useCultivoHook} from "../hooks/usercultivohook";
import {
  PlusCircle,
  Sprout,
  CheckCircle,
  Archive,
  Calendar,
  Tag,
  Wheat
} from "lucide-react";
import "/src/styles/DashboardUser.css";


function DashboardUser() {

  const { cultivos, 
          nuevoCultivo, 
          setNuevoCultivo, 
          handleAddCultivo, 
          handleCosechar
        } = useCultivoHook();

  return (



<div className="dashboard-content">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon-wrapper blue">
            <Sprout size={24} />
          </div>
          <div className="stat-data">
            <span className="stat-value">{cultivos.length}</span>
            <span className="stat-label">Total Cultivos</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper green">
            <Wheat size={24} />
          </div>
          <div className="stat-data">
            <span className="stat-value">
              {cultivos.filter(c => c.estado === "Activo").length}
            </span>
            <span className="stat-label">En Crecimiento</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper orange">
            <CheckCircle size={24} />
          </div>
          <div className="stat-data">
            <span className="stat-value">
              {cultivos.filter(c => c.estado === "Cosechado").length}
            </span>
            <span className="stat-label">Cosechados</span>
          </div>
        </div>
      </div>

      <div className="dashboard-main-grid">

        <section className="dashboard-card register-card">
          <div className="card-header">
            <PlusCircle size={20} className="header-icon" />
            <h3>Nuevo Registro</h3>
          </div>
          
          <form className="pro-form" onSubmit={(e) => { e.preventDefault(); handleAddCultivo(); }}>
            <div className="form-group">
              <label><Tag size={14} /> Nombre</label>
              <input
                type="text"
                placeholder="Ej: Lote Maíz Norte"
                value={nuevoCultivo.nombre}
                onChange={(e) => setNuevoCultivo({ ...nuevoCultivo, nombre: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label><Sprout size={14} /> Variedad / Tipo</label>
              <input
                type="text"
                placeholder="Ej: Híbrido K-90"
                value={nuevoCultivo.tipo}
                onChange={(e) => setNuevoCultivo({ ...nuevoCultivo, tipo: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label><Calendar size={14} /> Fecha de Siembra</label>
              <input
                type="date"
                value={nuevoCultivo.fechaSiembra}
                onChange={(e) => setNuevoCultivo({ ...nuevoCultivo, fechaSiembra: e.target.value })}
                required
              />
            </div>

            <button type="submit" className="btn-submit">
              Registrar Cultivo
            </button>
          </form>
        </section>

        <section className="dashboard-card table-card">
          <div className="card-header">
            <Archive size={20} className="header-icon" />
            <h3>Inventario de Campo</h3>
          </div>

          <div className="table-responsive">
            <table className="pro-table">
              <thead>
                <tr>
                  <th>Cultivo</th>
                  <th>Tipo</th>
                  <th>Fecha</th>
                  <th>Estado</th>
                  <th className="text-right">Acción</th>
                </tr>
              </thead>
              <tbody>
                {cultivos.map((c) => (
                  <tr key={c._id} className="table-row">
                    <td>
                      <div className="name-cell">
                        <span className="dot-indicator"></span>
                        <strong>{c.nombre}</strong>
                      </div>
                    </td>
                    <td><span className="type-badge">{c.tipo}</span></td>
                    <td>{new Date(c.fechaSiembra).toLocaleDateString()}</td>
                    <td>
                      <span className={`status-badge ${c.estado.toLowerCase()}`}>
                        {c.estado}
                      </span>
                    </td>
                    <td className="text-right">
                      {c.estado === "Activo" && (
                        <button
                          className="btn-action-cosechar"
                          onClick={() => handleCosechar(c._id)}
                        >
                          Cosechar
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DashboardUser;













