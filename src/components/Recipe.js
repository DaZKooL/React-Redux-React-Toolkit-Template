import React from 'react';
import styled from 'styled-components'

const Recipe = (props) => {
  const recipe = props.recipe;
  const Wrapper = styled.div`
  opacity: ${props.opacity};
  background-color: ${props.color};
`;
  return (
    <Wrapper>
    <div className='tile'>
        <h2>{recipe.strMeal}</h2>
        <img src={recipe.strMealThumb} alt='' />
      </div>
    </Wrapper>
  );
}

export default Recipe