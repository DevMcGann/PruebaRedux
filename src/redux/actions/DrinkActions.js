import axios from 'axios'
//const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
export const FETCHING_DRINKS = 'FETCHING_DRINKS'
export const FETCHING_DRINKS_SUCCESS='FETCHING_DRINKS_SUCCESS'
export const  FETCHING_DRINKS_ERROR = 'FETCHING_DRINKS_ERROR'


export function getDrinks(query){
    return async (dispatch) => {
        dispatch(get_drinks_init())
        axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
      .then(response => {
        const drinks = response.data
        dispatch(get_drinks_success(drinks))
      })
      .catch(error => {
        dispatch(get_drinks_error(error.message))
      })
    }
}





const get_drinks_init = () => ({
    type:FETCHING_DRINKS,
    payload: true
})

const get_drinks_success = (drinks) => ({
    type:FETCHING_DRINKS_SUCCESS,
    payload: drinks
})

const get_drinks_error = () => ({
    type:FETCHING_DRINKS_ERROR,
    payload: true
})



