import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  tagTypes: ['Users', 'User'],
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => '/users',
      providesTags: ['Users'],
    }),
    getUser: build.query({
      query: (id) => `/users/${id}`,
      providesTags: (result, error, id) => [{ type: 'User', id }],
    }),
  }),
})

export const { useGetUsersQuery, useGetUserQuery } = usersApi
