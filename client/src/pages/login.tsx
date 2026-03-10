import { useLoginHook } from "../hooks/loginhook";
import "/src/styles/login.css"




// Un pequeño componente para el logo tecnológico SVG
function Logo({className }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* --- ESTE ES UN SVG DE EJEMPLO DEL CONCEPTO DEL LOGO TECNOLÓGICO --- */}
      {/* Debes reemplazar esta parte por tu SVG real */}
      <circle cx="50" cy="50" r="50" fill="currentColor" fillOpacity="0.1" />
      <path 
        d="M50 20C33.4315 20 20 33.4315 20 50C20 66.5685 33.4315 80 50 80C66.5685 80 80 66.5685 80 50C80 33.4315 66.5685 20 50 20ZM50 70C38.9543 70 30 61.0457 30 50C30 38.9543 38.9543 30 50 30C61.0457 30 70 38.9543 70 50C70 61.0457 61.0457 70 50 70Z" 
        fill="currentColor"
      />
      <path 
        d="M45 55L38 48L35 51L45 61L65 41L62 38L45 55Z" 
        fill="currentColor"
      />
      {/* --- FIN DEL SVG DE EJEMPLO --- */}
    </svg>
  );
}


//AQUI ARRIBA HACER CAMBIOS PARA AGREGAR IMG CORRECTA 






function Login() {

  const {
    email,
    password,
    setEmail,
    setPassword,
    handleSubmit

  } = useLoginHook();









  return (
    <div className="login-page">

      <div className="login-card">
      <header className="login-header">

        <div className="logo-container">
          <Logo className="logo-icon" />
        </div>




      <h2>CultivosPro</h2>
      <p>Gestion inteligente de cultivos</p>

      </header>
      
      
      
      
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-group">
        <label>Correo electronico</label>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </div>

        <div className="input-group">
        <label>Contraseña</label>
        
        <input
          type="password"
          placeholder="........."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        </div>
        

        <button type="submit" className="login-button">Ingresar al panel</button>
      </form>



      <footer className="login-footer">
        <a href="#">Version 1.0</a>
      </footer>
      </div>
      </div>

  );
}
    





export default Login;