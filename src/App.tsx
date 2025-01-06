
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminRoute from './routes/admin.route'
import ClientRoute from './routes/client.route'
import './assets/styles/main.scss';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* admin router  */}
          <Route path='admin'>
            <AdminRoute/>
          </Route> 
          {/* client router */}
          <Route path=''>
            <ClientRoute/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
