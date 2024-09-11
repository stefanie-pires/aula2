import './App.css';
import PrimeiroComponente from './Components/primeiroComponente';
import SegundoComponente from './Components/segundoComponente';
import TerceiroComponente from './Components/terceiroComponente';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <NavBar />
      <Routes>
      <Route path='/' element={<PrimeiroComponente/>} />
      <Route path='/segundo' element={<SegundoComponente/>} />
      <Route path='/terceiro' element={<TerceiroComponente/>} />
      </Routes>
  
    </>
  );
}

export default App;
