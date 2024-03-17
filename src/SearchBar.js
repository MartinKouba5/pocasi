import React, { useState } from "react";
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [cityName, setCityName] = useState('');

  const handleSearch = () => {
    // Získání geografických souřadnic města
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${cityName}&key=52c23fa5ff3342498e1e4933520af69f`)
      .then(response => response.json())
      .then(data => {
        const lat = data.results[0].geometry.lat;
        const lng = data.results[0].geometry.lng;
        console.log(`Souřadnice pro ${cityName}: Latitude: ${lat}, Longitude: ${lng}`);

        // Získání obrázku města z Pexels API
        fetch(`https://api.pexels.com/v1/search?query=${cityName}&per_page=1`, {
          headers: {
            Authorization: 'EW1tTHTrV6lfwLUVULIRvW04ReDWJpMXrrTCvZdoDJP5GnCErcvYUNdu' // Nahraďte svým API klíčem od Pexels
          }
        })
          .then(response => response.json())
          .then(data => {
            let image;
            if (data.photos.length > 0) {
              image = data.photos[0].src.large;
            } else {
              image = 'https://static.scientificamerican.com/sciam/cache/file/6B2730C8-B0D0-485F-A0618F3954CF58D8_source.jpg?w=1200';
            }
            console.log(`Obrázek pro ${cityName}: ${image}`);
            onSearch({name: cityName, lat, lng, image});
          })
          .catch(error => console.error(error));
      })
      .catch(error => console.error(error));
  };

  return (
    <div class="wrap">
      <div class="search">
        <input 
          type="text" 
          class="searchTerm" 
          placeholder="Vyhledat město..." 
          value={cityName} 
          onChange={e => setCityName(e.target.value)}
        />
        <button type="submit" class="searchButton" onClick={handleSearch}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
