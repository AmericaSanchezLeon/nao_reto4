import "./App.css";

import Recibos from "./Components/recibos";
import Home from "./Components/home";
import Login from "./Components/login";
import Clientes from "./Components/clientes";

import { Link } from "react-router-dom";
import { Route, Routes, Switch } from "react-router-dom";
import { Menu, Navbar, Button } from "react-daisyui";
import { React , useState} from "react";
import { useNavigate } from 'react-router-dom';


export default function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div className="bg-slate-50 h-screen">
      <div>
        <Navbar className="pb-40 flex w-full component-preview p-2 items-center justify-center font-sans bg-white drop-shadow-sm ">
          <Navbar.Start>
            <h1 className="font-semibold text-lg">Welcome!</h1>
          </Navbar.Start>
          <Navbar.End>

            <Button onClick={handleLogout} variant="outline" color="primary">
              Logout
            </Button>
          </Navbar.End>
        </Navbar>
      </div>

      <div className="App w-full rounded-md h-screen">
        <Menu className="w-1/4 h-screen border-slate-300		bg-white drop-shadow-sm ">
          <Menu.Item className="bordered">
            <Link to="/home">Home</Link>
          </Menu.Item>
          <Menu.Item className="bordered">
            <Link to="/recibos">Recibos</Link>
          </Menu.Item>
          <Menu.Item className="bordered">
            <Link to="/clientes">Clientes</Link>
          </Menu.Item>
  
        </Menu>

        <Routes>
            <Route path="/" element={<Login />} /> 
            <Route path="recibos" element={<Recibos />} />
            <Route path="clientes" element={<Clientes />} />
            <Route path="home" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}
