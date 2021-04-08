import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title, dishType, mealType, directions, image, ingredients}) => {
    return (
        <div className={style.rec}>
            <h1>{title}</h1>
            <h4>{dishType}</h4>
            <h5>{mealType}</h5>
            <ul>
                {ingredients.map(ingredients =>
                    <li>{ingredients.text}</li>    
                )}
            </ul>
            <a href={directions} target="blanc"> Click here for instructions </a>
            <img src={image} alt="" />
            
        </div>
    )
}

export default Recipe;