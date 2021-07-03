import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchRecipes, recipesSelector } from './slices/recipes'

const App = () => {
  const dispatch = useDispatch()
  // hooks from recipes
  const { recipes, loading, hasErrors } = useSelector(recipesSelector)

  // on load and when it's dispatched
  useEffect(() => {
    dispatch(fetchRecipes())
  }, [dispatch])

  // Render recipes
  const renderRecipes = () => {
    if (loading) return <p>Loading recipes...</p>
    if (hasErrors) return <p>Cannot display recipes...</p>

    return recipes.map(recipe =>
      <div key={recipe.idMeal} className='tile'>
        <h2>{recipe.strMeal}</h2>
        <img src={recipe.strMealThumb} alt='' />
      </div>
    )
  }

  return (
    <section>
      <h1>Recipes</h1>
      <div className='content'>
        {renderRecipes()}
      </div>
    </section>
  )
}

export default App
