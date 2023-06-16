import './App.css';
import LandingPage from './pages/LandingPage';
import RegisterationPage from './pages/RegisterationPage';
import Admin from "./pages/Admin"
import AdminLogin from './pages/AdminLogin';
import NotOpen from './components/NotOpen';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MassMail from './pages/MassMail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<LandingPage />}/>
        {/* <Route  path="/registeration" element={<RegisterationPage />}/> */}
        <Route  path="/adminlogin" element={<AdminLogin />}/>
        <Route  path="/participants-list" element={<Admin />} />
        <Route  path="/mass-mail" element={<MassMail />} />
        {/* <Route  path="/notopen" element={<NotOpen />}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
