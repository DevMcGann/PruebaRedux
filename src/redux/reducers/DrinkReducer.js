import {FETCHING_DRINKS, FETCHING_DRINKS_SUCCESS, FETCHING_DRINKS_ERROR,CLEAN_DRINKS} from '../actions/DrinkActions.js'

const initialState = {
    drinks:[],
    loading:false,
    error:false
}

const  DrinkReducer = (state=initialState, action) => {
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
        case CLEAN_DRINKS:
            return {
                drinks:[],
                loading:false,
                error:false
            }
    
        default:
            return state
    }

}

export default DrinkReducer;