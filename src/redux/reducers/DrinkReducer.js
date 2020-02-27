import {FETCHING_DRINKS, FETCHING_DRINKS_SUCCESS, FETCHING_DRINKS_ERROR} from '../actions/DrinkActions.js'

const initialState = {
    drinks:[],
    loading:false,
    error:false
}

export default function (state=initialState, action){
    switch (action.type) {
        case FETCHING_DRINKS:
            return {
                ...state,
                loading:action.payload
            }
        case FETCHING_DRINKS_SUCCESS:
            return {
                loading: false,
                drinks: action.payload,
                error: false
             }
        case FETCHING_DRINKS_ERROR:
            return{
                loading:false,
                error:true
            }
        
    
        default:
            return state
    }

}