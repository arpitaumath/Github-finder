export const GithubReducer =(state,action) =>{
     switch (action.type) {
         
        case 'SEARCH_USERS':
            
            return {
                ...state,
                users : action.payload,
                
            }
         case 'SEARCH_USER':
            
            return {
                ...state,
                user : action.payload
              
            }
        default:
            return state
     }
}