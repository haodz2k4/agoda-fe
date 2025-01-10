import Header from "../../../components/admin/Header/Header"
import Sider from "../../../components/admin/Sider/Sider"
import Table from "./Components/Table/Table"


function Hotels() {


    return (
        <>
            <div className="admin">
                <Sider />
                <div className="admin__content">
                    <Header /> 
                    <main className="admin__main">
                        <Table />
                    </main>
                </div>
            </div>
        </>

    )
}

export default Hotels