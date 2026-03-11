import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardUser from "./pages/DashboardUser";
import DashboardAdmin from "./pages/DashboardAdmin";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";
import Login from "./pages/login";



function App() {

  return (
    <BrowserRouter>
    <Routes>

    <Route path="/" element={<Login/>} />



    <Route  element={<UserLayout />}>
      <Route path="/user" element={<DashboardUser />}  />

    </Route>

    



    <Route element={<AdminLayout />} >                      
    <Route path= "/admin" element={<DashboardAdmin />} />

    </Route>


    </Routes>
    
    </BrowserRouter>
  );
}


export default App;
