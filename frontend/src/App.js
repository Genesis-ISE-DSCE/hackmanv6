import './App.css';
import LandingPage from './pages/LandingPage';
// import RegisterationPage from './pages/RegisterationPage';
import Admin from "./pages/Admin"
import AdminLogin from './pages/AdminLogin';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MassMail from './pages/MassMail';
import RegClosedPage from './pages/RegClosedPage';
import RegisterationPage from "./pages/RegisterationPage"
import OneDayTimer from "./components/OneDayTimer"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<LandingPage />}/>
        <Route  path="/registeration-closed" element={<RegisterationPage />}/>
        <Route  path="/adminlogin" element={<AdminLogin />}/>
        <Route  path="/participants-list" element={<Admin />} />
        <Route  path="/mass-mail" element={<MassMail />} />
        <Route  path="/registeration" element={<RegClosedPage />}/>
        <Route path ="/event-begins" element={<OneDayTimer />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
