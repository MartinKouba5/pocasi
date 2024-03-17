// App.js
import React, { useState } from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import LoginPage from './Login';
import WeatherCard from './WeatherCard'; 
import Navbar from './navbar'; 
import SearchBar from './SearchBar';
import './App.css';

function WeatherApp({ onLogout }) { // Přidána prop onLogout
  const [cities, setCities] = useState([]);

  const handleSearch = (city) => {
    setCities([city, ...cities]);
  };

  return (
    <div className="App">
      <Navbar onLogout={onLogout}></Navbar>
      <div class="banner">
        <SearchBar onSearch={handleSearch}></SearchBar>
      </div>
      <div class="pocasi">
        {cities.map(city => (
          <WeatherCard cityName={city.name} latitude={city.lat} longitude={city.lng} backgroundImage={city.image} />
        ))}
      </div>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => { // Přidána funkce handleLogout
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ? <WeatherApp onLogout={handleLogout} /> : <LoginPage onLogin={handleLogin} />} /> {/* Předána prop onLogout */}
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/app" element={<WeatherApp onLogout={handleLogout} />} /> {/* Předána prop onLogout */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
