"use client"

import React from 'react';
import Clock from 'react-live-clock';
import {GiHeavyTimer} from 'react-icons/gi'

const AussiTZ = (props) => {
  return (
    <>
      <a href={props.link} target="_blank" rel="noreferrer">
      <div className='flex justify-between border-b border-black/40 py-1 transition-all hover:py-6 ease-it-out duration-300 hover:bg-white/40 p-1'>
        <div className='flex'>
          <p className='text-xs px-1'>{props.post}</p>
          <p>{props.state}</p>
          <p className='text-xs px-1'>{props.capital}</p>
        </div>
        <Clock 
          format={'hh:mm A'} 
          ticking={true}
          timezone={props.tz}
        ></Clock>
      </div>
      </a>
    </>
  )
}


export default function Aussitime() {
  return (
      <div className="p-2 mx-auto bg-cyan-400/10 backdrop-blur-sm text-black border border-black w-full">

        <div className='flex'>
          <div className='my-auto px-2 text-xl'>
            <GiHeavyTimer></GiHeavyTimer>
          </div>
          <p className="rounded-md text-xl">Timezones</p> 
        </div>


        <div className='py-2'>

          <AussiTZ
            link="https://goo.gl/maps/nMWtjA21okaYcQrT7"
            post="2000"
            state="NSW"
            capital="Sydney"
            tz="Australia/Sydney"
          ></AussiTZ>

          <AussiTZ
            link="https://goo.gl/maps/CqDEYTYfZBkbDdDf8"
            post="3000"
            state="VIC"
            capital="Melbourne"
            tz="Australia/Melbourne"
          ></AussiTZ>


          <AussiTZ
            link="https://goo.gl/maps/7ur5DzdGinZRZJ5e8"
            post="4000"
            state="QLD"
            capital="Brisbane"
            tz="Australia/Brisbane"
          ></AussiTZ>

          <AussiTZ
            link="https://goo.gl/maps/9ewQ8MrtTyJGg3tX8"
            post="5000"
            state="SA"
            capital="Adelaide"
            tz="Australia/Adelaide"
          ></AussiTZ>

          <AussiTZ
            link="https://goo.gl/maps/iJLLaEAui18EY9pXA"
            post="6000"
            state="WA"
            capital="Perth"
            tz="Australia/Perth"
          ></AussiTZ>

          <AussiTZ
            link="https://goo.gl/maps/Hnca7zxFWnqAekaJ8"
            post="7000"
            state="TAS"
            capital="Hobart"
            tz="Australia/Hobart"
          ></AussiTZ>

          <AussiTZ
            link="https://goo.gl/maps/vcENkrdNqHG5PVfm8"
            post="2600"
            state="ACT"
            capital="Canbera"
            tz="Australia/Sydney"
          ></AussiTZ>

          <AussiTZ
            link="https://goo.gl/maps/hwhtekNvy2GDnd437"
            post="0800"
            state="NT"
            capital="Darwin"
            tz="Australia/Darwin"
          ></AussiTZ>

        </div>
      </div>
  )
}
