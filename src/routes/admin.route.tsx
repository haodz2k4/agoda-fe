import {Route} from "react-router-dom"

function AdminRoute() {

    return (
        <>
            <Route index path="dashboard"/>
            <Route path="users"/>
            <Route path="roles"/>
            <Route path="permissions"/>
        </>
    )
}

export default AdminRoute