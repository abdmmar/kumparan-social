import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  tagTypes: ['Comments'],
  endpoints: (build) => ({
    getComments: build.query({
      query: (id) => `/posts/${id}/comments`,
      providesTags: ['Comments'],
    }),
    addComment: build.mutation({
      query: (data) => {
        const { id, ...body } = data
        return {
          url: `/posts/${id}/comments`,
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      },
      invalidatesTags: ['Comments'],
    }),
    updateComment: build.mutation({
      query: (data) => {
        const { id, ...body } = data
        return {
          url: `/comments/${id}`,
          method: 'PUT',
          body: JSON.stringify(body),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: 'Comments', id }],
    }),
    deleteComment: build.mutation({
      query(id) {
        return {
          url: `/comments/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: ['Comments'],
    }),
  }),
})

export const {
  useGetCommentsQuery,
  useLazyGetCommentsQuery,
  useAddCommentMutation,
  useUpdateCommentMutation,
  useDeleteCommentMutation,
} = commentsApi
