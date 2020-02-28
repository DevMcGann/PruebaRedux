import React,{useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getDrinks,CleanDrinks} from './redux/actions/DrinkActions';

import Item from './components/Item';
import Spinner from './components/Spinner';


import './App.css';

function App() {

  const [search, setSearch] = useState("");
  
  const dispatch = useDispatch();
  const search_Drinks = (searchParameter) => dispatch(  getDrinks(searchParameter) );
  const clean_drinks =()=> dispatch (CleanDrinks());
  const selector = useSelector(state => state.drinksArray.drinks)
  const fetching = useSelector(state => state.drinksArray.loading)

  useEffect(()=>{

      if (search.length >= 3 ){
       let query = search;
       search_Drinks(query)
      }
  },[search])

  const cancelar = e => {
    clean_drinks();
    setSearch('');
  }

  return (
    <div className="App">
      <input type="text" placeholder="Buscar" value={search} onChange={e => setSearch(e.target.value)}  />
      <button onClick={cancelar}>Cancelar</button>
      
      {(() => {
        
        if (!fetching && !selector.drinks) {
          return null
        }
        if (fetching){
          return <Spinner/>
        }
        if (selector.drinks){
          return selector.drinks.map((drink) =>
          <Item 
            key={drink.idDrink}
            drink={drink}
          />
        )
        }

      })()}
       
      
    </div>
  );
}

export default App;




/*{! selector.drinks  && !fetching ? <Spinner/> :  selector.drinks.map((drink) =>
          <Item 
            key={drink.idDrink}
            drink={drink}
          />
        )
  }
*/