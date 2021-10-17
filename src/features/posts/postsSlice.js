import { createSlice } from '@reduxjs/toolkit'
import { postsApi } from './postsAPI'

const postsSlice = createSlice({
  name: 'post',
  initialState: {
    postId: -1,
    posts: [],
    localPosts: [],
    deletedPostsId: [],
  },
  reducers: {
    setPostId: (state, { payload }) => {
      state.postId = payload
    },
    deletePost: (state, { payload }) => {
      state.deletedPostsId = [...state.deletedPostsId, payload]
    },
    updateLocalPost: (state, { payload }) => {
      let posts = [...state.posts]
      let index = posts.findIndex((post) => post.id === parseInt(payload.id))
      posts.splice(index, 1, payload)
      state.posts = posts
    },
  },
  extraReducers: (build) => {
    build.addMatcher(postsApi.endpoints.getPosts.matchFulfilled, (state, { payload }) => {
      state.posts = [...payload]
    })

    build.addMatcher(postsApi.endpoints.addPost.matchFulfilled, (state, { payload }) => {
      payload.id = payload.id + Math.ceil(Math.random(100) * 100)

      state.localPosts = [payload.id, ...state.localPosts]
      state.posts = [payload, ...state.posts]
    })

    build.addMatcher(postsApi.endpoints.updatePost.matchFulfilled, (state, { payload }) => {
      let posts = [...state.posts]
      let index = posts.findIndex((post) => post.id === parseInt(payload.id))
      posts.splice(index, 1, payload)
      state.posts = posts
    })
  },
})

export const { setPostId, deletePost, updateLocalPost } = postsSlice.actions

export const selectPostId = (state) => state.post.postId
export const selectAllDeletedPosts = (state) => state.post.deletedPostsId
export const selectAllPosts = (state) => state.post.posts
export const selectAllLocalPosts = (state) => state.post.localPosts

export default postsSlice.reducer
