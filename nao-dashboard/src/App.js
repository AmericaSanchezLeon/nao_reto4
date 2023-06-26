import "./App.css";
import Login from "./Components/login";
import { React} from "react";


export default function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
  <Login />

  );
}
