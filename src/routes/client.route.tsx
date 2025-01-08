import { Route, Routes } from "react-router-dom";
import Home from "../pages/clients/Home/Home";
import Login from "../pages/clients/Login/Login";


function ClientRoute() {

    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="login" element={<Login/>}/>
        </Routes>
    )
        
    
}

export default ClientRoute