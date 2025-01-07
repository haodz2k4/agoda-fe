import { Route, Routes } from "react-router-dom";
import Home from "../pages/clients/Home/Home";


function ClientRoute() {

    return (
        <Routes>
            <Route index element={<Home />} />
        </Routes>
    )
        
    
}

export default ClientRoute