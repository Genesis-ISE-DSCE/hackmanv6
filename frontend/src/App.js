import './App.css';
import LandingPage from './pages/LandingPage';
import Registeration from './pages/RegisterationPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/registeration" element={<Registeration />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
