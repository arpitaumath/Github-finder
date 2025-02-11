export const searchUsers =async(search) =>{
    const response = await fetch(`https://api.github.com/search/users?q=${search}`)
    const data =await  response.json()
    return data;
    // console.log(data.items)

}

export const searchUser =async(login) =>{
    const response =await fetch(`https://api.github.com/users/${login}`)
    const data = await response.json()
    return data ;
    // console.log(data)
}

