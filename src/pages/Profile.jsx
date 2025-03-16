import React, { useContext, useEffect } from 'react'
import GithubContext from '../provider/GithubContext'
import { useParams } from 'react-router-dom'
import { searchUser } from '../provider/GithubServer'

const Profile = () => {
  const {user} =useContext(GithubContext)
  const {dispatch} =useContext(GithubContext)
  const {login} =useParams()

  const getUser = async() =>{
      const data = await searchUser(login)
      console.log(data)
      dispatch({type:'SEARCH_USER',payload : data})
   }
    
  

  useEffect(() =>{
    getUser()
  },[login])

  return (
    <div className='flex flex-col h-screen   items-center  bg-black text-white '>
      
      <img className='w-56  border-2 border-white rounded-[50%] my-10 ' src= {user.avatar_url} alt=""></img>
     
   
    <h1 className='text-xl '>User ID : {user.id}</h1>
      <h1 className='text-xl font-bold '> Name : {user.name}</h1>
      <h1>Created At : {user.created_at}</h1>
      <h1>Follower : {user.followers}</h1>
      <h1>Following : {user.following}</h1>
    </div>
    
  )
}

export default Profile
