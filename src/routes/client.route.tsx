import { Route } from "react-router-dom";


function ClientRoute() {

    return (
        <>
            <Route index/>
            <Route path="products"/>
            <Route path="carts"/>
            <Route path="about"/>
        </>
    )
}

export default ClientRoute