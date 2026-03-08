import { Outlet,useNavigate} from "react-router-dom";
import { logoutadmin } from "../services/adminService";



function AdminLayout() {



    const navigate = useNavigate();

    const handleLogout = () => {

        logoutadmin();                   //lo que hace es limpiar el token y rol
        navigate("/")
    };


    return(

        <div>

            <header>
            <h2>BIENVENIDO ADMINISTRADOR</h2>


            <button onClick={handleLogout}>Cerrar sesion</button>

            </header>




            <main>
                <Outlet />
            </main>

        </div>

    );

}




export default AdminLayout;


