

import { Outlet } from "react-router-dom";


function UserLayout(){

    return(
        <div>

            <header>
                <h2>MI APLICACION</h2>
            </header>
    
    

        <main>
            <Outlet />  
        </main>
    
    
        </div>


    );
}


export default UserLayout;