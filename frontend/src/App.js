import './App.css';
import LandingPage from './pages/LandingPage';
import RegisterationPage from './pages/RegisterationPage';
import AdminLogin from './pages/AdminLogin';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/registeration" element={<RegisterationPage />}/>
        <Route path="/adminlogin" element={<AdminLogin />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
