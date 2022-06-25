import React, { useEffect, useState } from 'react'
import Header from './Components/Header/Header'
import './App.scss';
import CurrentWeather from './Components/Current weather/Current_Weather';
function App() {

  const [searchInput, setSearchInput] = useState("");

  const [coords, setCoords] = useState(null);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);




  

  const searchWeather = (e) => {
    e.preventDefault()
    console.log(searchInput)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        setCoords({
          lat: data.coord.lat,
          long: data.coord.lon
        })
      })
      .then(setSearchInput(""))
  }


  //* Get the default weather ==================================
  useEffect(() => {
    const getDefaultWeather = () => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=Palestine&appid=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(data => {
          setCoords({
            lat: data.coord.lat,
            long: data.coord.lon
          })
        })
        .then(() => {
          if (window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(position => {
              setCoords({
                lat: position.coords.latitude,
                long: position.coords.longitude
              })
            });
          } else {
            console.error('Your browser doesn\'t support geolocation')
          }
        })
    }
    getDefaultWeather()

  }, [])

  useEffect(() => {
    if (coords) {
      const getCity = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.long}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
          .then(res => res.json())
          .then(data => {
            setCity(data.name + ", " + data.sys.country)
          })
      }

      const getWeather = () => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.long}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
          .then(res => res.json())
          .then(data => {
            setWeather(data)
          })
      }

      getWeather();
      getCity();
    }

  }, [coords])

  return (
    <div className="App">
      <Header
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        searchWeather={searchWeather}
      />

    {
      weather ? 
      <> 
      <CurrentWeather 
        city = {city}
        currentWeather = {weather.current}
      />
           
      </>

      :
      ''
    }

    </div>
  );
}

export default App;
