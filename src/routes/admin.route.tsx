import {Route, Routes} from "react-router-dom"
import Dashboard from "../pages/admin/Dashboard/Dashboard"

function AdminRoute() {

    return (
        <Routes>
            <Route path="admin">
                <Route index path="dashboard" element={<Dashboard />}/>
                <Route path="users"/>
                <Route path="roles"/>
                <Route path="permissions"/>
            </Route>
        </Routes>
    )
}

export default AdminRoute