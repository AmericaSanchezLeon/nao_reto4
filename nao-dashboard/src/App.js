import './App.css';

import Recibos from './Components/recibos';
import Home from './Components/home';
import Clientes from './Components/clientes';
import Ventas from './Components/ventas';
import Productos from './Components/productos';

import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Routes } from "react-router-dom"

import { Menu } from 'react-daisyui'

export default function App() {
  return (
    <div>
      <Menu>
        <Menu.Item>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/recibos">Recibos</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/clientes">Clientes</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/ventas">Ventas</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/productos">Productos</Link>
        </Menu.Item>
      </Menu>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="recibos" element={<Recibos />} />
        <Route path="clientes" element={<Clientes />} />
        <Route path="Ventas" element={<Ventas />} />
        <Route path="productos" element={<Productos />} />
      </Routes>
    </div>


  );
}