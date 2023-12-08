import React from 'react'

export default function InfoBox({info}) {

// let info={
//     temp:25,
//         feelsLike:23,
//         weatherType:'dusky'
// }

  return (
    <div className='InfoBox'>
      <h2>Weather Info</h2>
      <h3>{`City: ${info.city}`}</h3>
      <p>{`Temp: ${info.temp}`}</p>
      <p>{`Feels Like: ${info.feelsLike}`}</p>
      <p>{`Weather type: ${info.weatherType}`}</p>
    </div>
  )
}
