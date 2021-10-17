import { render, screen } from '@testing-library/react'
import NavBar from '../NavBar'

describe('NavBar', () => {
  test('render heading', () => {
    render(<NavBar />)

    const heading = screen.getByRole('heading', { name: /dashboard/i })

    expect(heading).toBeInTheDocument()
  })
})
