import Nav from './components/Nav'
import Quotes from './components/quotes'
import Design from './components/Design'
import Aussitime from './components/Aussitime'
import SolarBlogs from './components/SolarBlogs'
import Aussinews from './components/Aussinews.js'
import WebLinks from './components/WebLinks'


export default function Home() {
  return (
    <main className="m-1">

      <div className="w-full h-screen absolute top-0 left-0">
      </div>

      <div className='grid gap-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 md:gap-2 m-3 mt-[100px] md:container mx-auto'>

        <Quotes></Quotes>
        
        <Aussitime></Aussitime>


        <div className='h-[500px] lg:col-span-2 overflow-y-scroll backdrop-blur-sm bg-black/80'>
          <Aussinews></Aussinews>
        </div>
        
        <div className='h-[500px] border-green-300 lg:col-span-2 backdrop-blur-sm bg-black/80'>
        <SolarBlogs></SolarBlogs>
        </div>


      </div>

        <Nav></Nav>

    </main>
  )
}
