import Header from "../../../components/admin/Header/Header"
import Sider from "../../../components/admin/Sider/Sider"
import TableManage from "../../../components/admin/TableManage/TableManage"


function Hotels() {


    return (
        <>
            <div className="admin">
                <Sider />
                <div className="admin__content">
                    <Header /> 
                    <main className="admin__main">
                        <TableManage 
                        ths={["#","title","thumbnail","rating","createdAt","updatedAt", "Thao tác"]} 
                        items={[]

                        }/>
                    </main>
                </div>
            </div>
        </>

    )
}

export default Hotels