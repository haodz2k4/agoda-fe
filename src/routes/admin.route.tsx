import {Route, Routes} from "react-router-dom"

function AdminRoute() {

    return (
        <Routes>
            <Route index path="dashboard"/>
            <Route path="users"/>
            <Route path="roles"/>
            <Route path="permissions"/>
        </Routes>
    )
}

export default AdminRoute