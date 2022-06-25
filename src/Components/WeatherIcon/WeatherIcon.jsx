import React from 'react'
import { ReactComponent as Cloudy } from './cloudy.svg'
import { ReactComponent as Fog } from './fog.svg'
import { ReactComponent as Moon } from './moon.svg'
import { ReactComponent as Rain } from './rain.svg'
import { ReactComponent as Snow } from './snow.svg'
import { ReactComponent as Storm } from './storm.svg'
import { ReactComponent as Sun } from './sun.svg'



const WeatherIcon = ({ iconId }) => {

    let SelectedIcon = null;

    switch (iconId) {
        case '02d':
        case '02n':
        case '03d':
        case '03n':
        case '04d':
        case '04n':
            SelectedIcon = Cloudy
            break;

        case '01d':
            SelectedIcon = Sun
            break;

        case '01n':
            SelectedIcon = Moon
            break;

        case '50d':
            SelectedIcon = Fog
            break;

        case '13d':
            SelectedIcon = Snow
            break;

        case '09d':
        case '10d':
            SelectedIcon = Rain
            break;

        case '11d':
            SelectedIcon = Storm
            break;

        default:
            SelectedIcon = Cloudy
            break;
    }



    return (
        <>
            {
                SelectedIcon ?
                    <SelectedIcon />
                    :
                    ''
            }
        </>
    )
}

export default WeatherIcon;