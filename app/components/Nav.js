"use client"

import React from "react";
import Clock from 'react-live-clock'
import {MdSolarPower} from 'react-icons/md'
import {BsFillCalendarCheckFill} from 'react-icons/bs'
import {TbRefreshDot} from 'react-icons/tb'

export default function Nav() {

  function refreshPage() {
    window.location.reload(false);
  }
  
  return (
    <div className="p-5 flex justify-between text-white border-b border-b-1 border-[#0f0f0f] fixed top-0 right-0 w-screen backdrop-blur-sm bg-gray-800/50">

      <div className="flex my-auto">
        <div className="text-2xl mt-auto mx-2">
          <MdSolarPower></MdSolarPower>
        </div>
        <h1>Solar Times</h1>
      </div>

      <div className="text-[10px] lg:text-sm mx-auto mt-auto flex">
        <div className="mx-2 my-auto">
          <BsFillCalendarCheckFill></BsFillCalendarCheckFill>
        </div>
        <Clock 
          format={'DD-MMMM-YYYY | dddd'}
          ticking={true}
        ></Clock>
      </div>

      <div className="my-auto lg:ml-0">
        <button onClick={refreshPage} className="text-xl bg-black p-2 rounded-full text-white hover:animate-spin">
          <TbRefreshDot></TbRefreshDot>
        </button>
      </div>
    </div>
  )
}
