import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



export default function SearchBox({ updateInfo }) {

    const [city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_Key = "8b97fb917972bee7f29ea463d2af0b21";

    const getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_Key}&units=metric`);
        let jsonResponse = await response.json();
        //    console.log(jsonResponse);
        let result = {
            city:city,
            temp: jsonResponse.main.temp,
            feelsLike: jsonResponse.main.feels_like,
            weatherType: jsonResponse.weather[0].main

        }
        console.log(result);
        return result;
    }

    const handleInputChange = ((event) => {
        setCity(event.target.value);
    })

    const handleSubmit = async(event) => {
        event.preventDefault();
        console.log(city);
        setCity("")
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo)
    }
    return (
        <div className='SearchBox'>
            <h2>Check weather now</h2>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="City" variant="outlined" value={city} onChange={handleInputChange} />
                <br />
                <Button variant="contained" type='submit'>Search</Button>



            </form>

        </div>
    )
}
