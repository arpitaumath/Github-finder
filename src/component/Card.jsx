import React from 'react'
import { Link } from 'react-router-dom'

const Card =({data}) => {
    console.log(data)
  return (
    <div className='flex flex-col items-center text-white font-thin border rounded-md border-sky-100 py-8 m-4' >
       <img className='w-20 rounded-[50%] ' src={data.avatar_url} alt=""></img>
        <h1 className='text-md mt-2 font-semibold'>{data.id}</h1>
        <h1 className='text-md  font-semibold'>{data.login}</h1>
        <Link to={`profile/${data.login}`} className='bg-cyan-600 text-white rounded-md px-2 my-1'>View More</Link>
       </div>
      
  )
}

export default Card
