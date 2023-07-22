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
    <div className="p-2 mx-auto bg-cyan-400/10 backdrop-blur-sm text-black border border-black w-full">
      <div className='flex'>
        <div className='px-1'>
          <BiSolidQuoteLeft></BiSolidQuoteLeft>
        </div>
        <p className="rounded-md text-xl">Insight</p> 
      </div>
      { getData ? 
      <div>
        <div className="text-lg py-3">
          <h1>"{getData.content}"</h1>
        </div>
        <a href={`https://www.google.com/search?q=` + getData.author} target="_blank" rel="noreferrer" className="font-medium text-sm underline">{getData.author}</a>
      </div>
      : 
        <h1>Loading...</h1>
      }
    </div>
  )
}

