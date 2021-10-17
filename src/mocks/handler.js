import { rest } from 'msw'
import { users, posts, albums, comments, photos } from 'test/data'

const BASE_URL = 'https://jsonplaceholder.typicode.com'
const USERS_URL = BASE_URL + '/users'
const USER_URL = BASE_URL + '/users/:userId'
const POSTS_URL = BASE_URL + '/users/:userId/posts'
const POST_POSTS_URL = BASE_URL + '/posts'
const ALBUMS_URL = BASE_URL + '/users/:userId/albums'
const COMMENTS_URL = BASE_URL + '/posts/:postId/comments'
const PHOTOS_URL = BASE_URL + '/albums/:albumId/photos'

export const get = [
  rest.get(USERS_URL, (req, res, ctx) => {
    return res(ctx.json(users))
  }),
  rest.get(USER_URL, (req, res, ctx) => {
    const { userId } = req.params

    return res(ctx.json(users[userId - 1]))
  }),
  rest.get(POSTS_URL, (req, res, ctx) => {
    return res(ctx.json(posts))
  }),
  rest.get(ALBUMS_URL, (req, res, ctx) => {
    return res(ctx.json(albums))
  }),
  rest.get(COMMENTS_URL, (req, res, ctx) => {
    return res(ctx.json(comments))
  }),
  rest.get(PHOTOS_URL, (req, res, ctx) => {
    return res(ctx.json(photos))
  }),
]

export const post = [
  rest.post(POST_POSTS_URL, (req, res, ctx) => {
    const { userId, id, title, body } = req.body

    return res(
      ctx.json({
        userId,
        id,
        title,
        body,
      }),
    )
  }),
  rest.post(COMMENTS_URL, (req, res, ctx) => {
    const { postId } = req.params
    const { id, name, email, body } = req.body

    return res(
      ctx.json({
        postId,
        id,
        name,
        email,
        body,
      }),
    )
  }),
]

export const exception = rest.get(USERS_URL, (req, res, ctx) => {
  return res(ctx.status(500), ctx.json({ message: 'Oh no, there was an error' }))
})

export const handlers = [...get, ...post]

export default handlers
