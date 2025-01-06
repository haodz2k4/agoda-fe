
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import AdminRoute from './routes/admin.route'
import ClientRoute from './routes/client.route'

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
