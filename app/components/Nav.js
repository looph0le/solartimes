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
    <div className="p-5 flex justify-between bg-cyan-400/10 text-gray-900 border-b border-b-2 border-gray-500 backdrop-blur-sm fixed top-0 right-0 w-screen">

      <div className="flex my-auto">
        <div className="text-2xl mt-auto mx-2">
          <MdSolarPower></MdSolarPower>
        </div>
        <h1>Solar Times</h1>
      </div>

      <div className="text-[10px] lg:text-lg mx-auto mt-auto flex">
        <div className="mx-2 my-auto">
          <BsFillCalendarCheckFill></BsFillCalendarCheckFill>
        </div>
        <Clock 
          format={'DD-MMMM-YYYY / h:mm A / dddd'}
          ticking={true}
        ></Clock>
      </div>

      <div className="my-auto lg:ml-0">
        <button onClick={refreshPage} className="text-xl bg-black hover:text-blue-500 p-2 rounded-full text-white hover:animate-spin">
          <TbRefreshDot></TbRefreshDot>
        </button>
      </div>
    </div>
  )
}
