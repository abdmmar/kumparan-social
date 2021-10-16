import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
  name: 'user',
  initialState: {
    userId: -1,
  },
  reducers: {
    setUserId: (state, { payload }) => {
      state.userId = payload
    },
  },
})

export const { setUserId } = usersSlice.actions

export const selectUserId = (state) => state.user.userId

export default usersSlice.reducer
