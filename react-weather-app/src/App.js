import React from "react"
import Searchbar from "./components/Searchbar"
import Weatherbox from "./components/Weatherbox"
import Current from "./components/Current"
import data from "./data.json"

export default function App() {

    const [text, setText] = React.useState("");
    const [started, setStarted] = React.useState(false);
    const [cityData, setCityData] = React.useState({});
    const [cityName, setCityName] = React.useState("");
    const [firstRenderDone, setFirstRenderDone] = React.useState(false);
    const [multiples, setMultiples] = React.useState([]);

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {

        let lat = 0;
        let lng = 0;
        let arr = [];
        const cities = data.Cities;

        e.preventDefault();

        for (let i = 0; i < cities.length; i++) {
            if (text.toUpperCase() === cities[i].city_ascii.toUpperCase()) {
                arr.push(cities[i])
            }
        }

        if (arr.length === 1) {

            lat = arr[0].lat
            lng = arr[0].lng

            setCityName(`${arr[0].city_ascii}, ${arr[0].admin_name}, ${arr[0].country}`)

            fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum&current_weather=true&timezone=America%2FNew_York`)
                .then(res => res.text())
                .then(data => setCityData(JSON.parse(data)))

        } else if (arr.length > 1) {
            setMultiples(arr)
        }
    }

    const handleButtonClick = (lat, lng, cityName, adminName, country) => {

        setCityName(`${cityName}, ${adminName}, ${country}`)

        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum&current_weather=true&timezone=America%2FNew_York`)
            .then(res => res.text())
            .then(data => setCityData(JSON.parse(data)))
        setMultiples([])
    }

    React.useEffect(() => {

        if (started === false && firstRenderDone === true) {
            setStarted(true)
        }

        setFirstRenderDone(true)

    }, [cityData])




    return (
        <>
            {started === false ?
                <div className="frontpage-container">
                    <h1 className="title">React Weather App</h1>
                    <Searchbar handleButtonClick={handleButtonClick} multiples={multiples} handleChange={handleChange} handleSubmit={handleSubmit} />
                </div>
                :
                <div className="main-container" style={(cityData.current_weather.weathercode === 51) || (cityData.current_weather.weathercode === 53) ||
                    (cityData.current_weather.weathercode === 55) || (cityData.current_weather.weathercode === 56) || (cityData.current_weather.weathercode === 57) ||
                        (cityData.current_weather.weathercode === 61) || (cityData.current_weather.weathercode === 63) || (cityData.current_weather.weathercode === 65) ||
                        (cityData.current_weather.weathercode === 66) || (cityData.current_weather.weathercode === 67) || (cityData.current_weather.weathercode === 80) ||
                        (cityData.current_weather.weathercode === 81) || (cityData.current_weather.weathercode === 82) || (cityData.current_weather.weathercode === 95) ||
                        (cityData.current_weather.weathercode === 96) || (cityData.current_weather.weathercode === 99) ? { backgroundImage: "url(/images/rainbackground.png)" } : { backgroundImage: "url(/images/Background.png)" }}>
                    <p className="searchTitle">Search</p>
                    <Searchbar handleButtonClick={handleButtonClick} multiples={multiples} handleChange={handleChange} handleSubmit={handleSubmit} />
                    <Current currentWeather={cityData.current_weather} cityName={cityName} />
                    <div className="weatherbox-container">
                        <Weatherbox today={true} key={cityData.daily.time[0]} tempMax={cityData.daily.temperature_2m_max[0]} tempMin={cityData.daily.temperature_2m_min[0]}
                            date={cityData.daily.time[0]} weatherCode={cityData.daily.weathercode[0]} precipSum={cityData.daily.precipitation_sum[0]}
                            sunrise={cityData.daily.sunrise[0]} sunset={cityData.daily.sunset[0]} />
                        <Weatherbox today={false} key={cityData.daily.time[1]} tempMax={cityData.daily.temperature_2m_max[1]} tempMin={cityData.daily.temperature_2m_min[1]}
                            date={cityData.daily.time[1]} weatherCode={cityData.daily.weathercode[1]} precipSum={cityData.daily.precipitation_sum[1]}
                            sunrise={cityData.daily.sunrise[1]} sunset={cityData.daily.sunset[1]} />
                        <Weatherbox today={false} key={cityData.daily.time[2]} tempMax={cityData.daily.temperature_2m_max[2]} tempMin={cityData.daily.temperature_2m_min[2]}
                            date={cityData.daily.time[2]} weatherCode={cityData.daily.weathercode[2]} precipSum={cityData.daily.precipitation_sum[2]}
                            sunrise={cityData.daily.sunrise[2]} sunset={cityData.daily.sunset[2]} />
                        <Weatherbox today={false} key={cityData.daily.time[3]} tempMax={cityData.daily.temperature_2m_max[3]} tempMin={cityData.daily.temperature_2m_min[3]}
                            date={cityData.daily.time[3]} weatherCode={cityData.daily.weathercode[3]} precipSum={cityData.daily.precipitation_sum[3]}
                            sunrise={cityData.daily.sunrise[3]} sunset={cityData.daily.sunset[3]} />
                        <Weatherbox today={false} key={cityData.daily.time[4]} tempMax={cityData.daily.temperature_2m_max[4]} tempMin={cityData.daily.temperature_2m_min[4]}
                            date={cityData.daily.time[4]} weatherCode={cityData.daily.weathercode[4]} precipSum={cityData.daily.precipitation_sum[4]}
                            sunrise={cityData.daily.sunrise[4]} sunset={cityData.daily.sunset[4]} />
                        <Weatherbox today={false} key={cityData.daily.time[5]} tempMax={cityData.daily.temperature_2m_max[5]} tempMin={cityData.daily.temperature_2m_min[5]}
                            date={cityData.daily.time[5]} weatherCode={cityData.daily.weathercode[5]} precipSum={cityData.daily.precipitation_sum[5]}
                            sunrise={cityData.daily.sunrise[5]} sunset={cityData.daily.sunset[5]} />
                        <Weatherbox today={false} key={cityData.daily.time[6]} tempMax={cityData.daily.temperature_2m_max[6]} tempMin={cityData.daily.temperature_2m_min[6]}
                            date={cityData.daily.time[6]} weatherCode={cityData.daily.weathercode[6]} precipSum={cityData.daily.precipitation_sum[6]}
                            sunrise={cityData.daily.sunrise[6]} sunset={cityData.daily.sunset[6]} />
                    </div>
                </div>
            }
        </>
    )
}