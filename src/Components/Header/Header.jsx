import React from 'react';
import "./Header.scss";
import { ReactComponent as Menu } from './menu.svg'
import { ReactComponent as Location } from './address-location.svg'
import { gsap } from "gsap";


const Header = ({ searchInput, setSearchInput, searchWeather }) => {



    const handleChange = (e) => {
        setSearchInput(e.target.value);
    }

    const toggleSidebar = () => {
        const headerElement = document.getElementById("header");
        headerElement.classList.toggle("open");
    }

    const closeSidebar = (e) => {
        const headerElement = document.getElementById("header");
        if (!e.target.classList.contains("nav-links") && headerElement.classList.contains("open")) {
            headerElement.classList.remove("open");
        }
    }


    return (
        <header id="header">
            <div className="container">

                <div className="logo">
                    <h1>Weather<span>+</span></h1>
                </div>

                <nav onClick={closeSidebar}>

                    <div className="nav-links">

                        <form className="location-bar" action='submit'>
                            <input type="text" name="location" id="location-input" placeholder='Change Location' onChange={handleChange} value={searchInput}/>
                            <button onClick={searchWeather}>
                                <Location className='icon input-icon address-icon' />
                            </button>
                        </form>

                        <ul>
                            <li>
                                <button className='active'>Current Weather</button>
                            </li>

                            <li>
                                <button>Hourly Weather</button>
                            </li>

                            <li>
                                <button>Daily Weather</button>
                            </li>

                        </ul>
                    </div>


                </nav>

                <div className="menu-btn" onClick={toggleSidebar}>
                    <Menu className="icon menu-icon" id="menu-icon" />
                </div>
            </div>
        </header>

    )
}

export default Header;