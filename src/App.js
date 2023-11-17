import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import RegistrationPage from "./pages/registration";
import LoginPage from "./pages/login";
import WeatherPage from "./pages/weather";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/weather" element={<WeatherPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
