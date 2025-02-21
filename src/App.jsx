import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from "./components/SplashScreen";
import Header from "./components/Header";
import WeatherDisplay from './components/WeatherDisplay';
import WeatherForecast from './components/WeatherForecast';
import FishLevel from './components/FishLevel';
import WeatherDetails from './components/WeatherDetails';
import Weather from './pages/Weather';
import Search from './pages/Search';
import Map from './pages/Map';
import FishType from './components/FishType';
import "./App.css";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 10); // Show splash screen for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <WeatherDisplay />
            <WeatherForecast />
            <FishLevel />
            <FishType />
            <WeatherDetails />
          </>
        } />
        <Route path="/weather" element={<Weather />} />
        <Route path="/search" element={<Search />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </Router>
  );
}

export default App;
