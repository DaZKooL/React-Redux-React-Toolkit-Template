import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  loading: false,
  hasErrors: false,
  recipes: [],
}

export const recipesUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

// A slice for recipes with our three reducers
const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    getRecipes: state => {
      state.loading = true
    },
    getRecipesSuccess: (state, { payload }) => {
      state.recipes = payload
      state.loading = false
      state.hasErrors = false
    },
    getRecipesFailure: state => {
      state.loading = false
      state.hasErrors = true
    },
  },
})

// Three actions generated from the slice
export const { getRecipes, getRecipesSuccess, getRecipesFailure } = recipesSlice.actions

// A selector
export const recipesSelector = state => state.recipes

// The reducer
export default recipesSlice.reducer

// Asynchronous thunk action
export const fetchRecipes = () => {
  return async dispatch => {
    dispatch(getRecipes())

    try {
      const response = await fetch(recipesUrl)
      const data = await response.json()

      dispatch(getRecipesSuccess(data.meals))
    } catch (error) {
      dispatch(getRecipesFailure())
    }
  }
}
