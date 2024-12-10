import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState('')
  const api = "3b023292d46c3436d05d5b865bf1a471"

  async function handleSearch() {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`
      )
      setWeather(response.data);
    }
    catch (err) {
      console.log("Error while fetching data: ", err);
    }
  }

  return (
    <div>
      <h1>Weather</h1>

      <div>
        <input type="text" onChange={(e) => setCity(e.target.value)} placeholder="Enter a City" className="" />
        <button onClick={handleSearch}>Search</button>
        <div>
          <DisplayWeather city={city} weather={weather} />
        </div>
      </div>
    </div>
  )
}

const DisplayWeather = React.memo(({ weather }) => {
  return (
    < div >
      <h2>{JSON.stringify(weather, null, 2)}</h2>
    </div >
  )
});

export default App;
