
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminRoute from './routes/admin.route'
import ClientRoute from './routes/client.route'
import './assets/clients/styles/main.scss';
import './assets/admin/scss/main.scss'


function App() {

  return (
    <>
      <BrowserRouter>
        <ClientRoute />
        <AdminRoute />
      </BrowserRouter>
    </>
  )
}

export default App
