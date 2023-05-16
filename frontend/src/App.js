import './App.css';
import LandingPage from './pages/LandingPage';
import RegisterationPage from './pages/RegisterationPage';
import Admin from "./pages/Admin"
import AdminLogin from './pages/AdminLogin';
import NotOpen from './components/NotOpen';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />}/>
        <Route exact path="/registeration" element={<RegisterationPage />}/>
        <Route exact path="/adminlogin" element={<AdminLogin />}/>
        <Route exact path="/participants-list" element={<Admin />} />
        <Route exact path="/notopen" element={<NotOpen />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
