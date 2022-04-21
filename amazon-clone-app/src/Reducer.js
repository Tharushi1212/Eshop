export const initialState = {
    basket : [],
    loggedinuser:null
}

const reducer = (state, action) =>{
    console.log(action);
    switch(action.type){
        case 'ADD_TO_Basket':
            return{
                ...state,
                basket:[...state.basket, action.item]
            }
        case 'SER_LOGIN':
                return{
                    ...state,
                    loggedinuser:action.user
                }
        default:
                
                return state
            
            
    }
    
}
export default reducer