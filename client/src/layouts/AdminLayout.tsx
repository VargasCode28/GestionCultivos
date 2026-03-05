import { Outlet } from "react-router-dom";


function AdminLayout() {

    return(

        <div>

            <h2>BIENVENIDO ADMINISTRADOR</h2>





            <main>
                <Outlet />
            </main>
        </div>

    )
}



export default AdminLayout;