

import { Outlet, useNavigate } from "react-router-dom";
import { logout } from "../services/authService";





function UserLayout(){

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();                   //lo que hace es limpiar el token y rol
        navigate("/")
    };

    return(
        <div>

            <header>
                <h2>MI APLICACION</h2>
                <button onClick={handleLogout}>Cerrar sesion</button>
            </header>
    
    

        <main>
            <Outlet />  
        </main>
    
    
        </div>


    );
}


export default UserLayout;