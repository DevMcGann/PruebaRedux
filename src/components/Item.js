import React from 'react';
import './Item.css'

const Item = ({drink}) => {
    return (
        <div className="item">
            <div className="imagen">
                <img src={drink.strDrinkThumb} alt={drink.idDrink}/>
            </div>
            <p>{drink.strDrink}</p>
        </div>
      );
}
 
export default Item;