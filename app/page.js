import Nav from './components/Nav'
import Quotes from './components/quotes'
import Design from './components/Design'
import Aussitime from './components/Aussitime'
import Aussiweather from './components/Aussiweather'
import Aussinews from './components/Aussinews.js'


export default function Home() {
  return (
    <main className="">

      <div className="w-full h-screen absolute top-0 left-0">
        <Design></Design>
      </div>

      <div className='grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 m-3 mt-[100px] container mx-auto'>

        <Quotes></Quotes>
        
        <Aussitime></Aussitime>


        <div className='h-[500px] border border-black lg:col-span-4 bg-cyan-400/10 backdrop-blur-sm overflow-y-scroll'>
          <Aussinews></Aussinews>
        </div>
        
        <Aussiweather></Aussiweather>

      </div>

        <Nav></Nav>

    </main>
  )
}
