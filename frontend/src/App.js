//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/Home";
import NovedadesPage from "./pages/Novedades";
import NosotrosPage from "./pages/Nosotros";
import ContactoPage from "./pages/Contacto";

function App() {
  return (
    <div className="App">
      <Router>
      <Header> </Header>
      <Nav> </Nav>
      <Routes>
        <Route path='/welcome' element={<HomePage/>} />
        <Route path='/nosotros' element={<NosotrosPage/>} />
        <Route path='/novedades' element={<NovedadesPage/>} />
        <Route path='/contacto' element={<ContactoPage/>} />
      </Routes>
      <Footer> </Footer>
      </Router>
    </div>
  );
}

export default App;
