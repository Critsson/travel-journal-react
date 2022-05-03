import React from "react"

export default function Weatherbox(props) {

    let placeholderWeather;
    const dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Today"]
    const monthArr = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const newSunrise = props.sunrise.slice(11, 16);
    const newSunset = props.sunset.slice(11, 16);
    const month = monthArr[Number(props.date.slice(5, 7))-1]
    const day = String(Number(props.date.slice(8, 10)))
    const year = props.date.slice(0, 4)
    const theDate = new Date(`${month} ${day}, ${year}`);
    const currentDay = props.today === false ? dayArr[theDate.getDay()] : dayArr[7]


    switch (props.weatherCode) {
        case 0:
            placeholderWeather = "/images/clear.png"
            break;
        case 1:
            placeholderWeather = "/images/partlycloudy.png"
            break;
        case 2:
            placeholderWeather = "/images/cloudy.png"
            break;
        case 3:
            placeholderWeather = "/images/overcast.png"
            break;
        case 45:
            placeholderWeather = "/images/fog.png"
            break;
        case 48:
            placeholderWeather = "/images/fog.png"
            break;
        case 51:
            placeholderWeather = "/images/drizzle.png"
            break;
        case 53:
            placeholderWeather = "/images/drizzle.png"
            break;
        case 55:
            placeholderWeather = "/images/drizzle.png"
            break;
        case 56:
            placeholderWeather = "/images/drizzle.png"
            break;
        case 57:
            placeholderWeather = "/images/drizzle.png"
            break;
        case 61:
            placeholderWeather = "/images/rain.png"
            break;
        case 63:
            placeholderWeather = "/images/rain.png"
            break;
        case 65:
            placeholderWeather = "/images/rain.png"
            break;
        case 66:
            placeholderWeather = "/images/freezingrain.png"
            break;
        case 67:
            placeholderWeather = "/images/freezingrain.png"
            break;
        case 71:
            placeholderWeather = "/images/snowfall.png"
            break;
        case 73:
            placeholderWeather = "/images/snowfall.png"
            break;
        case 75:
            placeholderWeather = "/images/snowfall.png"
            break;
        case 77:
            placeholderWeather = "/images/snowfall.png"
            break;
        case 80:
            placeholderWeather = "/images/showers.png"
            break;
        case 81:
            placeholderWeather = "/images/showers.png"
            break;
        case 82:
            placeholderWeather = "/images/showers.png"
            break;
        case 85:
            placeholderWeather = "/images/snowshowers.png"
            break;
        case 86:
            placeholderWeather = "/images/snowshowers.png"
            break;
        case 95:
            placeholderWeather = "/images/thunderstorm.png"
            break;
        case 96:
            placeholderWeather = "/images/thunderstorm.png"
            break;
        case 99:
            placeholderWeather = "/images/thunderstorm.png"
            break;
        default:
            break;
    }

    return (
        <div className="weatherbox">
            <p className="day">{`${currentDay}`}</p>
            <img className="weather-code" src={placeholderWeather} alt="" />
            <p className="temp-max">{`Daily High: ${props.tempMax}°`}</p>
            <p className="temp-min">{`Daily Low: ${props.tempMin}°`}</p>
            <p className="precip-sum">{`24 Hr Rain: ${props.precipSum}mm`}</p>
            <p className="sunrise">{`Sunrise: ${newSunrise} ET`}</p>
            <p className="sunset">{`Sunset: ${newSunset} ET`}</p>
        </div>
    )
}