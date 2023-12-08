import React, { useState } from 'react'
import SearchBox from "./SearchBox"
import InfoBox from './InfoBox'
import "./WeatherApp.css"

export default function WeatherApp() {
    const[weatherInfo,setWeatherInfo]=useState({
        city:'Hong kong',
        temp:25,
            feelsLike:23,
            weatherType:'dusky'
    })
const updateInfo=(newInfo)=>{
    setWeatherInfo(newInfo)
}

  return (
    <div className='WeatherApp'>
      <h2>Weather App</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  )
}
