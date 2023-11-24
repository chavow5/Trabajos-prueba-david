import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import { Home } from './routes/Inicio';
import { Layout } from './routes/Layout';
import { Clientes } from './routes/clientes/Clientes';
import { NuevoCliente } from './routes/clientes/NuevoCliente';
import { Unknown } from './routes/Unknown';
import { Transacciones} from './routes/transacciones/Transacciones';
import { NuevaTransaccion } from './routes/transacciones/NuevaTransaccion';

function App() {
  

  //HTML
  return (
    <>
    <Router>
      <Layout/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/clientes' element={<Clientes />} />
          <Route path='/clientes/agregar' element={<NuevoCliente/>} />
        <Route path='/transacciones' element={<Transacciones/>} ></Route>
          <Route path='/transacciones/agregar' element={<NuevaTransaccion/>}></Route>
        <Route path="*" element={<Unknown/>} />
      </Routes>
    </Router>

      

    


    </>
  )
}

export default App
