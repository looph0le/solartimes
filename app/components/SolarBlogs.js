"use client"

import {TiWeatherCloudy} from 'react-icons/ti'
import {FaPaperPlane} from 'react-icons/fa'
import {AiOutlineArrowRight} from 'react-icons/ai'

const BlogComponent = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
    <div className='transition-all duration-500 flex justify-between hover:bg-green-400/10 px-2 py-1 hover:py-3 ease-it-out'>

      <div className='flex'>
        <div className='my-auto pr-2 text-lg text-green-500'>
          <AiOutlineArrowRight></AiOutlineArrowRight>
        </div>
        <p>{props.name}</p>
      </div>
      <div className='text-gray-400 text-sm my-auto'>{props.link}</div>
    </div>
    </a>
  )
}

export default function SolarBlogs() {

  return (
      <div className="p-2 mx-auto text-green-500 w-full">

        <div className='flex p-1'>
          <div className='my-auto px-2 text-lg'>
            <FaPaperPlane></FaPaperPlane>
          </div>
          <p className="rounded-md text-xl">Solar Blogs</p> 
        </div>


        <div className='pt-5 px-3 grid gap-5 text-white'>
          <BlogComponent
            name="Solar Secure"
            link="https://www.solar-secure.com.au/blog/"
          ></BlogComponent>
          <BlogComponent
            name="Solar Quotes"
            link="https://www.solarquotes.com.au/blog/"
          ></BlogComponent>
          <BlogComponent
            name="Solar Choice"
            link="https://www.solarchoice.net.au/blog/"
          ></BlogComponent>

        <div className='text-gray-400 text-center'>Adding more soon...</div>

        </div>
      </div>
  )
}
