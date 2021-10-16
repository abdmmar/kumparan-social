import { createSlice } from '@reduxjs/toolkit'

const postsSlice = createSlice({
  name: 'post',
  initialState: {
    postId: -1,
  },
  reducers: {
    setPostId: (state, { payload }) => {
      state.postId = payload
    },
  },
})

export const { setPostId } = postsSlice.actions

export const selectPostId = (state) => state.post.postId

export default postsSlice.reducer
