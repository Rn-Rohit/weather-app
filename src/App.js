import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App (){



  const [city, updateCity] = useState("Pune");
  const [weather, updateWeather] = useState();

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=abe0d13943beca2b6822fa2fc7bbae4e`;
    const fetchWeather = async () => {
      const response = await fetch(url)
      const responseJSON = await response.json(); 
      updateCity(responseJSON);
    }

    fetchWeather(); 
  }, [])

    


  return (
    <div className="App">
        <p>{city.name}</p>
    </div>
  );
}

export default App;
