import { render, screen } from 'test/render'
import { server, exception } from 'mocks/server'
import UserList from '../UserList'

describe('UserList', () => {
  test('render returned users on successful fetch', async () => {
    render(<UserList />)

    const users = await screen.findAllByTestId(/user-\d+/)

    expect(users).toHaveLength(10)
    expect(screen.getByText('Leanne Graham')).toBeInTheDocument()
    expect(screen.getByText(/bret/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sincere@april\.biz/i })).toBeInTheDocument()
  })

  test('render error message on error fetch', async () => {
    server.use(exception)
    render(<UserList />)

    const errorMessage = await screen.findByText(/Oh no, there was an error/)
    const userHeading = screen.getByRole('heading', { name: /users/i })

    expect(errorMessage).toBeInTheDocument()
    expect(userHeading).toBeInTheDocument()
  })
})
