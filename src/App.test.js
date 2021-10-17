import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App'

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  )

  const dashboardHeading = screen.getByRole('heading', { name: /dashboard/i })
  const usersHeading = screen.getByRole('heading', { name: /users/i })
  const userProfileHeading = screen.getByRole('heading', { name: /user profile/i })

  expect(dashboardHeading).toBeInTheDocument()
  expect(usersHeading).toBeInTheDocument()
  expect(userProfileHeading).toBeInTheDocument()
})
