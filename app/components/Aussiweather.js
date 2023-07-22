"use client"

import axios from 'axios'

import { useEffect, useState } from 'react';
import {TiWeatherCloudy} from 'react-icons/ti'

const WeatherReport = (props) => {
  return (
    <div className='flex justify-between'>
      <div className=''>{props.city}</div>
      <div>
        <div>{props.desc}</div>
      </div>
      <div>
        <div>{(props.mint - 273.15).toFixed(2)}°C ~ {(props.maxt - 273.15).toFixed(2)}°C</div>
      </div>
    </div>
  )
}

export default function Aussiweather() {

  return (
      <div className="p-2 mx-auto text-black w-full">

        <div className='flex'>
          <div className='my-auto px-2 text-2xl'>
            <TiWeatherCloudy></TiWeatherCloudy>
          </div>
          <p className="rounded-md text-xl">Weather</p> 
        </div>


        <div className='py-2 grid grid-cols-2'>

        </div>
      </div>
  )
}
