import React from 'react'
import Icon from '../WeatherIcon/WeatherIcon'



const CurrentWeather = ({ city, currentWeather }) => {


    return (
        <div className="current-weather page">
            <div className="container">
                <div className="page-details">
                    <div className="left-section main-details">
                        <div className="city-name">
                            <h2>{city}</h2>
                        </div>
                        <div className="weather-icon icon">
                            <Icon
                                iconId={currentWeather.weather[0].icon}
                            />

                        </div>
                        <div className="temperature">
                            <h1>{Math.floor(currentWeather.temp)}°<span>C</span></h1>
                        </div>
                        <div className="weather-description">
                            <h3>{currentWeather.weather[0].main}</h3>
                        </div>
                    </div>

                    <div className="right-section weather-details">

                        <div className="details-section top-details">
                            <div className="weather-detail">
                                <div className="detail-type">
                                    <h4>Feels like</h4>
                                </div>
                                <div className="detail-description">
                                    <h2>{`${Math.floor(currentWeather.feels_like)}`}°C</h2>
                                </div>
                            </div>
                            <div className="weather-detail">
                                <div className="detail-type">
                                    <h4>Humidity</h4>
                                </div>
                                <div className="detail-description">
                                    <h2>{currentWeather.humidity}%</h2>
                                </div>
                            </div>
                        </div>

                        <div className="details-section bottom-details">
                            <div className="weather-detail">
                                <div className="detail-type">
                                    <h4>Wind Speed</h4>
                                </div>
                                <div className="detail-description">
                                    <h2>{currentWeather.wind_speed}km/h</h2>
                                </div>
                            </div>
                            <div className="weather-detail">
                                <div className="detail-type">
                                    <h4>Clouds</h4>
                                </div>
                                <div className="detail-description">
                                    <h2>{currentWeather.clouds}%</h2>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>
            </div>
        </div>
    )
}


export default CurrentWeather;