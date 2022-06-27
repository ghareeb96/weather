import React, { useState, useEffect } from 'react'
import Icon from '../WeatherIcon/WeatherIcon'
import { ReactComponent as Location } from '../gps.svg'



const HourlyWeather = ({ city, dailyWeather, getCurrentLocation }) => {

    const [activeDay, setActiveDay] = useState(null)
    const [daysWeather, setDaysWeather] = useState(null)

    const get_day = (dt_time) => {
        const unix = new Date(dt_time * 1000);
        const day = unix.toLocaleString("en-US", {
            weekday: "short"
        });

        return day;
    }


    useEffect(() => {
        if (dailyWeather) {
            setDaysWeather(dailyWeather.slice(1, 7))
            setActiveDay(dailyWeather[1])
        }
    }, [dailyWeather])


    return (
        <div className="daily-weather page">
            {activeDay ?

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
                                    iconId={activeDay.weather[0].icon}
                                />

                            </div>
                            <div className="temperature">
                                <h4>
                                    {Math.floor(activeDay.temp.min)}
                                </h4>
                                <h1>
                                    {Math.floor(activeDay.temp.max)}°
                                    <span>C</span>
                                </h1>
                            </div>
                            <div className="weather-description">
                                <h3>{activeDay.weather[0].main}</h3>
                            </div>
                        </div>

                        <div className="right-section weather-details">

                            <div className="details-section top-details">
                                <div className="weather-detail">
                                    <div className="detail-type">
                                        <h4>Feels like</h4>
                                    </div>
                                    <div className="detail-description">
                                        <h6>{Math.floor(activeDay.temp.min)}</h6>
                                        <h2>
                                            {Math.floor(activeDay.temp.max)}°C
                                        </h2>
                                    </div>
                                </div>
                                <div className="weather-detail">
                                    <div className="detail-type">
                                        <h4>Humidity</h4>
                                    </div>
                                    <div className="detail-description">
                                        <h2>{activeDay.humidity}%</h2>
                                    </div>
                                </div>
                            </div>

                            <div className="details-section bottom-details">
                                <div className="weather-detail">
                                    <div className="detail-type">
                                        <h4>Wind Speed</h4>
                                    </div>
                                    <div className="detail-description">
                                        <h2>{activeDay.wind_speed} km/h</h2>
                                    </div>
                                </div>
                                <div className="weather-detail">
                                    <div className="detail-type">
                                        <h4>Clouds</h4>
                                    </div>
                                    <div className="detail-description">
                                        <h2>{activeDay.clouds}%</h2>
                                    </div>
                                </div>
                            </div>




                        </div>


                    </div>

                    <div className="weather-days filter-weather">
                        {
                            daysWeather.map((day, index) => (
                                <div
                                    className={activeDay.dt === day.dt ? "day-weather filter-item active" : "day-weather filter-item"}

                                    onClick={() => { setActiveDay(daysWeather[index]) }
                                    }

                                    key={index}
                                >
                                    <div className="icon">
                                        <Icon
                                            iconId={day.weather[0].icon}
                                        />
                                    </div>
                                    <div className="temperature">
                                        <h6>{Math.floor(day.temp.min)}</h6>
                                        <h2>

                                            {Math.floor(day.temp.max)}°C
                                        </h2>
                                    </div>
                                    <div className="day"><h4>{get_day(day.dt)}</h4></div>
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