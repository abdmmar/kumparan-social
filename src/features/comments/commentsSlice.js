import { createSlice } from '@reduxjs/toolkit'
import { commentsApi } from './commentsAPI'

const commentsSlice = createSlice({
  name: 'comment',
  initialState: {
    comments: [],
    deletedCommentsId: [],
  },
  reducers: {
    deleteComment: (state, { payload }) => {
      state.deletedCommentsId = [...state.deletedCommentsId, payload]
    },
  },
  extraReducers: (build) => {
    build.addMatcher(commentsApi.endpoints.getComments.matchFulfilled, (state, { payload }) => {
      state.comments = [...payload]
    })

    build.addMatcher(commentsApi.endpoints.addComment.matchFulfilled, (state, { payload }) => {
      state.comments = [payload, ...state.comments]
    })

    build.addMatcher(commentsApi.endpoints.updateComment.matchFulfilled, (state, { payload }) => {
      let comments = [...state.comments]
      let index = comments.findIndex((comment) => comment.id === parseInt(payload.id))
      comments.splice(index, 1, payload)
      state.comments = comments
    })
  },
})

export const { deleteComment } = commentsSlice.actions

export const selectAllComments = (state) => state.comment.comments
export const selectAllDeletedcomments = (state) => state.comment.deletedCommentsId

export default commentsSlice.reducer
