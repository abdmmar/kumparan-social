import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const albumsApi = createApi({
  reducerPath: 'albumsApi',
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

export const { useGetAlbumsQuery, useLazyGetAlbumsQuery, useGetPhotosQuery, useLazyGetPhotosQuery, useGetPhotoQuery } =
  albumsApi
