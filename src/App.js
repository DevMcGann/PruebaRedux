import React,{useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getDrinks} from './redux/actions/DrinkActions'


import './App.css';

function App() {

  const [search, setSearch] = useState("");
  
  
  const dispatch = useDispatch();
  const search_Drinks = (searchParameter) => dispatch(  getDrinks(searchParameter) );
  const selector = useSelector(state => state.drinksArray.drinks)

  useEffect(()=>{

      if (search.length >= 3 ){
       let query = search;
       search_Drinks(query)
       
      }

  },[search])

  

  return (
    <div className="App">
      <input type="text" placeholder="Buscar" value={search} onChange={e => setSearch(e.target.value)}  />
      <ul>
        {!selector.drinks ? null : selector.drinks.map((drink) =>
        <li key={drink.idDrink}>
          <p>{drink.strDrink}</p>
        </li>
        )}
      </ul>
    </div>
  );
}

export default App;
