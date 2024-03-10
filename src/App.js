import React, { useState, useEffect } from 'react';
import { fetchWeatherApi } from 'openmeteo';
import WeatherCard from './WeatherCard'; // cesta k souboru WeatherCard
import './App.css';

function App() {



  return (
    <div className="App">
      <WeatherCard cityName="Žatec" latitude={50.3272} longitude={13.5458} backgroundImage="https://cdn.kudyznudy.cz/files/51/51f3d2b6-530a-4d6d-97bf-e9d05518b3ec.webp?v=20230919103400" />
      <WeatherCard cityName="Louny" latitude={50.357} longitude={13.7967} backgroundImage="https://noviny-zblizka.cz/wp-content/uploads/2022/03/Chram-Mikulas-Louny.jpg" />
      <WeatherCard cityName="Most" latitude={50.503} longitude={13.6362} backgroundImage="https://www.imostecko.cz/src/uploads/petr-toman-nepouzivat-na-pohlednice-16.jpg" />
      <WeatherCard cityName="Praha" latitude={50.088} longitude={14.4208} backgroundImage="https://images8.alphacoders.com/374/374028.jpg" />
      <WeatherCard cityName="Brno" latitude={49.1952} longitude={16.608} backgroundImage="https://media.istockphoto.com/id/1355785866/photo/a-rare-view-of-brno.jpg?s=612x612&w=0&k=20&c=ssEPuXC7DzwIBgoX8dIksH4U1nKTZMwaXaD-KpDG2bQ=" />
      <WeatherCard cityName="Ostrava" latitude={49.8347} longitude={18.282} backgroundImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Masarykovo_n%C3%A1m%C4%9Bst%C3%AD_v_Ostrav%C4%9B.jpg/1200px-Masarykovo_n%C3%A1m%C4%9Bst%C3%AD_v_Ostrav%C4%9B.jpg" />

   
    </div>
    

);
}
export default App;
