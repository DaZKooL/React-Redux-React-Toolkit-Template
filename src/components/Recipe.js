import React from 'react';

const Recipe = (props) => {
  const recipe = props.recipe;

  return (
    <div className='tile'>
        <h2>{recipe.strMeal}</h2>
        <img src={recipe.strMealThumb} alt='' />
      </div>
  );
}

export default Recipe