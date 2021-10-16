import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  tagTypes: ['Albums', 'Photos'],
  endpoints: (build) => ({
    getAlbums: build.query({
      query: (id) => `/users/${id}/albums`,
      providesTags: ['Albums'],
    }),
    getPhotos: build.query({
      query: (id) => `/albums/${id}/photos`,
    }),
    getPhoto: build.query({
      query: (id) => `/photos/${id}`,
    }),
  }),
})

export const { useGetUsersQuery, useGetUserQuery } = usersApi
