import { createSlice } from '@reduxjs/toolkit'
import { commentsApi } from './commentsAPI'

const commentsSlice = createSlice({
  name: 'comment',
  initialState: {
    comments: [],
    localComments: [],
    deletedCommentsId: [],
  },
  reducers: {
    deleteComment: (state, { payload }) => {
      state.deletedCommentsId = [...state.deletedCommentsId, payload]
    },
    updateLocalComment: (state, { payload }) => {
      let comments = [...state.comments]
      let index = comments.findIndex((comment) => comment.id === parseInt(payload.id))
      comments.splice(index, 1, payload)
      state.comments = comments
    },
  },
  extraReducers: (build) => {
    build.addMatcher(commentsApi.endpoints.getComments.matchFulfilled, (state, { payload }) => {
      state.comments = [...payload]
    })

    build.addMatcher(commentsApi.endpoints.addComment.matchFulfilled, (state, { payload }) => {
      payload.id = payload.id + Math.ceil(Math.random(100) * 100)

      state.localComments = [payload.id, ...state.localComments]
      state.comments = [...state.comments, payload]
    })

    build.addMatcher(commentsApi.endpoints.updateComment.matchFulfilled, (state, { payload }) => {
      let comments = [...state.comments]
      let index = comments.findIndex((comment) => comment.id === parseInt(payload.id))
      comments.splice(index, 1, payload)
      state.comments = comments
    })
  },
})

export const { deleteComment, updateLocalComment } = commentsSlice.actions

export const selectAllComments = (state) => state.comment.comments
export const selectAllLocalComments = (state) => state.post.localComments
export const selectAllDeletedComments = (state) => state.comment.deletedCommentsId

export default commentsSlice.reducer
