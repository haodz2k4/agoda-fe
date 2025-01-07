
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminRoute from './routes/admin.route'
import ClientRoute from './routes/client.route'
import './assets/styles/main.scss';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<ClientRoute />}/>
            <Route path='admin' element={<AdminRoute/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
