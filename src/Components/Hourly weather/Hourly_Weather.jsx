import React, { useState, useEffect } from 'react'
import Icon from '../WeatherIcon/WeatherIcon'
import { ReactComponent as Location } from '../gps.svg'



const HourlyWeather = ({ city, hourlyWeather, getCurrentLocation }) => {

    const [activeHour, setActiveHour] = useState(null)
    const [hoursWeather, setHoursWeather] = useState(null)

    const get_hour = (dt_time) => {
        const unix = new Date(dt_time * 1000);
        const time = unix.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric"
        });

        return time;
    }


    useEffect(() => {
        if (hourlyWeather) {
            setHoursWeather(hourlyWeather.slice(1, 7))
            setActiveHour(hourlyWeather[1])
        }
    }, [hourlyWeather])


    return (
        <div className="hourly-weather page">
            {activeHour ?

                <div className="container">
                    <div className="page-details">

                        <div className="left-section main-details">
                            <div className="city-name">
                                <h2>{city}</h2>
                                <button onClick={getCurrentLocation}>
                                    <Location className='icon' />
                                </button>
                            </div>
                            <div className="weather-icon icon">
                                <Icon
                                    iconId={activeHour.weather[0].icon}
                                />

                            </div>
                            <div className="temperature">
                                <h1>{Math.floor(activeHour.temp)}°<span>C</span></h1>
                            </div>
                            <div className="weather-description">
                                <h3>{activeHour.weather[0].main}</h3>
                            </div>
                        </div>

                        <div className="right-section weather-details">

                            <div className="details-section top-details">
                                <div className="weather-detail">
                                    <div className="detail-type">
                                        <h4>Feels like</h4>
                                    </div>
                                    <div className="detail-description">
                                        <h2>{`${Math.floor(activeHour.feels_like)}`}°C</h2>
                                    </div>
                                </div>
                                <div className="weather-detail">
                                    <div className="detail-type">
                                        <h4>Humidity</h4>
                                    </div>
                                    <div className="detail-description">
                                        <h2>{activeHour.humidity}%</h2>
                                    </div>
                                </div>
                            </div>

                            <div className="details-section bottom-details">
                                <div className="weather-detail">
                                    <div className="detail-type">
                                        <h4>Wind Speed</h4>
                                    </div>
                                    <div className="detail-description">
                                        <h2>{activeHour.wind_speed} km/h</h2>
                                    </div>
                                </div>
                                <div className="weather-detail">
                                    <div className="detail-type">
                                        <h4>Clouds</h4>
                                    </div>
                                    <div className="detail-description">
                                        <h2>{activeHour.clouds}%</h2>
                                    </div>
                                </div>
                            </div>




                        </div>


                    </div>

                    <div className="weather-hours filter-weather">
                        {
                            hoursWeather.map((hour, index) => (
                                    <div
                                        className={activeHour.dt === hour.dt ? "hour-weather filter-item active" : "hour-weather filter-item"}

                                        onClick={() => { setActiveHour(hoursWeather[index]) }
                                        }

                                        key={index}
                                    >
                                        <div className="icon">
                                            <Icon
                                                iconId={hour.weather[0].icon}
                                            />
                                        </div>
                                        <div className="temperature">
                                            <h2>{Math.floor(hour.temp)}°C</h2>
                                        </div>
                                        <div className="hour"><h4>{get_hour(hour.dt)}</h4></div>
                                    </div>

                            ))

                        }
                    </div>
                </div>

                : ""}
        </div>
    )
}


export default HourlyWeather;