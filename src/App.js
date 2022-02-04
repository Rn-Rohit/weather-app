import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App (){



  const [city, updateCity] = useState(null);
  const [search, updateSearch] = useState("Mumbai");

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=abe0d13943beca2b6822fa2fc7bbae4e`;
    const fetchWeather = async () => {
      const response = await fetch(url)
      const responseJSON = await response.json(); 
      updateSearch(responseJSON);
      console.log(responseJSON.name);
    }
    fetchWeather(); 
  }, [search])


  return (
    <div className="App">
      <div className="input-data">
        <input type="search" className="input-box" onChange={ (event) => {updateSearch(event.target.value)}  } />
      </div>
      <div className="dsplay-screen">
        {
          !city?(
            <p> No data found</p>
          ):( 
            <div className="abc"> 
              <p>{city.main.temp}</p>
            </div>
           )
        }
      </div>
    </div>
  );
}

export default App;
