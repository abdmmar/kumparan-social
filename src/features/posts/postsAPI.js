import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  tagTypes: ['Posts', 'Post'],
  endpoints: (build) => ({
    getPosts: build.query({
      query: (id) => `/users/${id}/posts`,
      providesTags: ['Posts'],
    }),
    getPost: build.query({
      query: (id) => `/posts/${id}`,
      providesTags: (result, error, id) => [{ type: 'Post', id }],
    }),
    addPost: build.mutation({
      query: (data) => {
        return {
          url: '/posts',
          method: 'POST',
          body: data,
        }
      },
    }),
    updatePost: build.mutation({
      query: (data) => {
        const { id, ...body } = data
        return {
          url: `/posts/${id}`,
          method: 'PUT',
          body: body,
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: 'Post', id }],
    }),
    deletePost: build.mutation({
      query(id) {
        return {
          url: `posts/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Posts', id }],
    }),
  }),
})

export const {
  useGetPostsQuery,
  useLazyGetPostsQuery,
  useGetPostQuery,
  useAddPostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
} = postsApi
