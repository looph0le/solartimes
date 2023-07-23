import {AiOutlineLink} from 'react-icons/ai'

export default function WebLinks() {
  return (
    <div className="p-2 mx-auto text-purple-400 w-full">

      <div className='flex p-1'>
        <div className='px-1 my-auto text-2xl'>
          <AiOutlineLink></AiOutlineLink>
        </div>
        <p className="text-xl">Important Links</p> 
      </div>

      <div>
        <div className="text-lg py-3 text-gray-200 grid grid-cols-4 text-center">
          <div>
            <p className=''>Growatt</p>
            <ul className='text-sm'>
              <li>Inverter</li>
            </ul>
          </div>
          <div>
            <p className=''>Solis</p>
          </div>
        </div>
      </div>

    </div>
  )
}
