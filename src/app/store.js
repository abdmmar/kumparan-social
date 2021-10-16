import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { usersApi } from 'features/users/usersAPI'
import { postsApi } from 'features/posts/postsAPI'
import { albumsApi } from 'features/albums/albumsAPI'
import { commentsApi } from 'features/comments/commentsAPI'

import usersSlice from 'features/users/usersSlice'

export const store = configureStore({
  reducer: {
    user: usersSlice,
    [usersApi.reducerPath]: usersApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      usersApi.middleware,
      postsApi.middleware,
      albumsApi.middleware,
      commentsApi.middleware,
    )
  },
})

setupListeners(store.dispatch)
