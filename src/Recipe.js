import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title, dishType, mealType, image, ingredients}) => {
    return (
        <div className={style.rec}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredients =>
                    <li>{ingredients.text}</li>    
                )}
            </ol>
            <h4>{dishType}</h4>
            <h4>{mealType}</h4>
            <img src={image} alt="" />
        </div>
    )
}

export default Recipe;