import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import App from './App';
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './slices'


test('renders recipes', () => {
  const store = configureStore({ reducer: rootReducer })

  render(<Provider store={store}> // Set context
    <App /> // Now App has access to context
  </Provider>);
  screen.debug();
  const recipes = screen.getByText(/Loading recipes.../i);
  console.log(recipes)
  expect(recipes).toBeInTheDocument();
});