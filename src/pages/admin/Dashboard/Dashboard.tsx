import Header from "../../../components/admin/Header/Header"
import Sider from "../../../components/admin/Sider/Sider"


function Dashboard() {

    return (
        <>
            <div className="admin">
                <Sider />
                <div className="admin__content">
                    <Header /> 
                    <main className="admin__main">
                        <h1>Welcome to the Dashboard</h1>
                        <p>This is your admin panel content area.</p>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Dashboard