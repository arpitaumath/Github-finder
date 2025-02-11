import { createContext, useReducer } from "react";
import { GithubReducer } from './GithubReducer';

const GithubContext =createContext()



export const GithubProviders =({children}) =>{


    const initialState = {
        users : [],
        user:{},
        
    }
    // console.log(initialState.users)

    const [state , dispatch] =useReducer( GithubReducer,  initialState)
    return (
        <GithubContext.Provider value={{...state,dispatch}}>{children}</GithubContext.Provider>
    )
}

export default GithubContext