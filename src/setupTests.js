import '@testing-library/jest-dom/extend-expect'
import { server } from './mocks/server'
import { store } from 'app/store'
import { usersApi } from 'features/users/usersAPI'

beforeAll(() => server.listen())
afterEach(() => {
  server.resetHandlers()

  /*  
    Clear RTK Query cache
    Read: https://medium.com/@t3j3ndra/how-to-clear-rtk-query-cache-in-tests-between-requests-when-using-mock-service-worker-and-jest-cb36ea4ffb4b
  */
  store.dispatch(usersApi.util.resetApiState())
})
afterAll(() => server.close())

const { getComputedStyle } = window
window.getComputedStyle = (elt) => getComputedStyle(elt)
