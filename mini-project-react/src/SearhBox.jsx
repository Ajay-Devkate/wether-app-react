import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "http://api.openweathermap.org/geo/1.0/direct";
  const API_URL_2 = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "d480310cf0bb9ef8df455e43cc488160";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
      let [jsonResponse] = await response.json();

      let response_2 = await fetch(
        `${API_URL_2}?lat=${jsonResponse.lat}&lon=${jsonResponse.lon}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse_2 = await response_2.json();

      let result = {
        city: city,
        temp: jsonResponse_2.main.feels_like,
        humidity: jsonResponse_2.main.humidity,
        weather: jsonResponse_2.weather[0].description,
        windSpeed: Math.floor(jsonResponse_2.wind.speed * 3.6),
        visibility: jsonResponse_2.visibility / 1000,
      };

      // console.log(result);
      return result;
    } catch (err) {
        throw err;
    }
  };

  let handleOnChange = (event) => {
    setCity((city = event.target.value));
  };

  let handlePrevent = async (event) => {
    try{
        event.preventDefault();
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
    } catch(error){
        setError(true)
    }
  };

  return (
    <div className="SearchBox">
      <h2>Search for the weather</h2>
      <form onSubmit={handlePrevent}>
        <TextField
          id="city"
          label="City Name"
          variant="standard"
          onChange={handleOnChange}
          value={city}
          required
        />
        <br /> <br />
        <Button
          size="small"
          type="submit"
          variant="contained"
          endIcon={<SearchIcon />}
        >
          Search
        </Button>
        {error && <p style={{color:"red"}}>No such place found in our API</p>}
      </form>
    </div>
  );
}
