import React, { useContext, useState } from 'react'
import { searchUsers } from '../provider/GithubServer'
import GithubContext from '../provider/GithubContext'


const Form = () => {
  const {dispatch  }  =useContext(GithubContext)
   const [search , setSearch] = useState('')

   
 

  const handleSubmit = async (e) =>{
    e.preventDefault()
     const data = await searchUsers(search)
    //  console.log(data)
     dispatch({type : 'SEARCH_USERS' , payload:data.items})
       setSearch('')
      
  }
  return (
    <div className='w-full'>
       <h1 className='text-center text-2xl font-bold my-5'>Find Github users</h1>
        <form className='w-full flex justify-center my-3' onSubmit={handleSubmit}>
          <input placeholder='Enter Username' className='w-3/5  border-4 focus:outline-none border-slate-200  px-2 rounded-l-lg h-10' onChange={(e) => setSearch(e.target.value)} value={search}/>
          <button className='w-1/5 rounded-r-lg bg-cyan-800 text-white text-xl font-bold'>Search</button>
        </form>
    </div>
  )
}

export default Form 
