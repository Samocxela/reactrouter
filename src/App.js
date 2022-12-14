
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./views/Home"
import NotFound from "./views/NotFound";
import Login from "./views/Login";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacto" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter> 
    </div>
  );
}

export default App;
