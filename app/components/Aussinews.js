import {FaRegNewspaper} from 'react-icons/fa'

async function getData(){
  const res = await fetch(`https://newsapi.org/v2/top-headlines?country=au&apiKey=c44f4c03f38d4ba7be70ec4c498a55d3`)
  if (!res.ok){
    throw new Error('Faild to Fetch Data')
  }
  return res.json()
}

export default async function Aussinews(){
  const data = await getData();
  return (
    <div className="p-2 mx-auto text-gray-300">
      <div className='flex'>
        <div className='px-1 my-auto text-xl px-2'>
          <FaRegNewspaper></FaRegNewspaper>
        </div>
        <p className="rounded-md text-xl">News</p> 
      </div>
      <div>
        <div className="text-lg py-3">
        {data.articles.map(c => 
          <a key={c.publishedAt} href={c.url} target="_blank" rel="noreferrer">
          <div key={c.publishedAt} className="p-3 border-b border-gray-500 transition-all hover:py-10 hover:bg-white/10 duration-500">
            <h1 className="text-white">{c.title}</h1>
            <div className="flex justify-between text-gray-500">
              <p className="text-xs">{c.publishedAt}</p>
              <p className="text-xs">{c.author}</p>
            </div>
          </div>
          </a>
        )}
        </div>
        <h1 className='text-center'> - The End - </h1>
      </div>
    </div>
  )
}
