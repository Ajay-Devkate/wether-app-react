import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearhBox"

export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState({
            city: "xxxx",
            temp : "x",
            humidity: "x",
            visibility: "x",
            windSpeed: "x",
            weather: "xx"
        })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return( <div>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox Info = {weatherInfo}/>
    </div>)
}