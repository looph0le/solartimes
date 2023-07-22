"use client"

import {BiSolidQuoteLeft} from 'react-icons/bi'

import { useEffect, useState } from "react";

export default function Motivation(){

  const [getData, setGetData] = useState([]);

  const fetchData = () => {
    fetch(`https://api.quotable.io/random?tag=motivation`)
    .then((response) => response.json())
    .then((data) => {
        setGetData(data);
      });
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="p-2 mx-auto backdrop-blur-sm text-[#FFFE33] border border-black w-full bg-black/80">
      <div className='flex'>
        <div className='px-1'>
          <BiSolidQuoteLeft></BiSolidQuoteLeft>
        </div>
        <p className="rounded-md text-xl">Insight</p> 
      </div>
      { getData ? 
      <div>
        <div className="text-lg py-3 text-white">
          <h1>{getData.content}</h1>
        </div>
        <a href={`https://www.google.com/search?q=` + getData.author} target="_blank" rel="noreferrer" className="font-medium text-sm underline">{getData.author}</a>
      </div>
      : 
        <h1>Loading...</h1>
      }
    </div>
  )
}

