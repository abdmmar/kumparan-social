import usersReducer, { setUserId } from '../usersSlice'

describe('Users Reducer', () => {
  const initialState = {
    userId: 5,
  }

  test('should handle initial state', () => {
    expect(usersReducer(undefined, { type: 'unknown' })).toEqual({
      userId: -1,
    })
  })

  test('should handle setUserId', () => {
    const actual = usersReducer(initialState, setUserId(10))
    expect(actual.userId).toEqual(10)
  })
})
