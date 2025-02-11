import React, { useContext } from 'react'
import Card from './Card'
import GithubContext from '../provider/GithubContext'

const CardContainer = () => {
    const {users} =useContext(GithubContext)
    // console.log(users)
  return (
    <div className='grid gap-3 my-5 grid-cols md:grid-cols-2 lg:grid-cols-4 '>
      
      {users.map(data => <Card key={data.id} data={data} />)}
      
      </div>
  )
}

export default CardContainer
