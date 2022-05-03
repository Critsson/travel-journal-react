import React from "react"

export default function Current(props) {

    let placeholderWeather;
    const updatedTime = props.currentWeather.time.slice(11, 16)


    switch (props.currentWeather.weathercode) {
        case 0:
            placeholderWeather = <img className="weather-icon" alt="" src="/images/clear.png" />
            break;
        case 1:
            placeholderWeather = <img className="weather-icon" alt="" src="/images/partlycloudy.png" />
            break;
        case 2:
            placeholderWeather = <img className="weather-icon" alt="" src="/images/cloudy.png" />
            break;
        case 3:
            placeholderWeather = <img className="weather-icon" alt="" src="/images/overcast.png" />
            break;
        case 45:
            placeholderWeather = <img className="weather-icon" alt="" src="/images/fog.png" />
            break;
        case 48:
            placeholderWeather = <img className="weather-icon" alt="" src="/images/fog.png" />
            break;
        case 51:
            placeholderWeather = <img className="weather-icon" alt="" src="/images/drizzle.png" />
            break;
        case 53:
            placeholderWeather = <img className="weather-icon" alt="" src="/images/drizzle.png" />
            break;
        case 55:
            placeholderWeather = <img className="weather-icon" alt="" src="/images/drizzle.png" />
            break;
        case 56:
            placeholderWeather = <img className="weather-icon" alt="" src="/images/drizzle.png" />
            break;
        case 57:
            placeholderWeather = <img className="weather-icon" alt="" src="/images/drizzle.png" />
            break;
        case 61:
            placeholderWeather = <img className="weather-icon" alt="" src="/images/rain.png" />
            break;
        case 63:
            placeholderWeather = <img className="weather-icon" alt="" src="/images/rain.png" />
            break;
        case 65:
            placeholderWeather = <img className="weather-icon" alt="" src="/images/rain.png" />
            break;
        case 66:
            placeholderWeather = <img className="weather-icon" alt="" src="/images/freezingrain.png" />
            break;
        case 67:
            placeholderWeather = <img className="weather-icon" alt="" src="/images/freezingrain.png" />
            break;
        case 71:
            placeholderWeather = <img className="weather-icon" alt="" src="/images/snowfall.png" />
            break;
        case 73:
            placeholderWeather = <img className="weather-icon" alt="" src="/images/snowfall.png" />
            break;
        case 75:
            placeholderWeather = <img className="weather-icon" alt="" src="/images/snowfall.png" />
            break;
        case 77:
            placeholderWeather = <img className="weather-icon" alt="" src="/images/snowfall.png" />
            break;
        case 80:
            placeholderWeather = <img className="weather-icon" alt="" src="/images/showers.png" />
            break;
        case 81:
            placeholderWeather = <img className="weather-icon" alt="" src="/images/showers.png" />
            break;
        case 82:
            placeholderWeather = <img className="weather-icon" alt="" src="/images/showers.png" />
            break;
        case 85:
            placeholderWeather = <img className="weather-icon" alt="" src="/images/snowshowers.png" />
            break;
        case 86:
            placeholderWeather = <img className="weather-icon" alt="" src="/images/snowshowers.png" />
            break;
        case 95:
            placeholderWeather = <img className="weather-icon" alt="" src="/images/thunderstorm.png" />
            break;
        case 96:
            placeholderWeather = <img className="weather-icon" alt="" src="/images/thunderstorm.png" />
            break;
        case 99:
            placeholderWeather = <img className="weather-icon" alt="" src="/images/thunderstorm.png" />
            break;
        default:
            break;
    }

    return (
        <div className="outside-current-container">
            <h1>{props.cityName}</h1>
            <p className="updated">{`Last updated at ${updatedTime} ET`}</p>
            <div className="current-container">
                <div className="current-weather-container">
                    {placeholderWeather}
                    <h1 className="current-temperature">{props.currentWeather.temperature + " C°"}</h1>
                </div>
                <div className="current-wind-container">
                    <img className="wind-sock" src="/images/windflag.png" alt="" />
                    <h1 className="current-winddir">{props.currentWeather.winddirection + "°"}</h1>
                    <img className="wind" src="/images/wind.png" alt="" />
                    <h1 className="current-windspeed">{props.currentWeather.windspeed + " km/h"}</h1>
                </div>
            </div>
        </div>
    )
}
