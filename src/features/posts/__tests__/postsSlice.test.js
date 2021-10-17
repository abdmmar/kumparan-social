import postsReducer, { setPostId, deletePost, updateLocalPost } from '../postsSlice'
import { posts } from 'test/data'

describe('Users Reducer', () => {
  const initialState = {
    postId: -1,
    posts: posts,
    localPosts: [],
    deletedPostsId: [],
  }

  test('should handle initial state', () => {
    expect(postsReducer(undefined, { type: 'unknown' })).toEqual({
      postId: -1,
      posts: [],
      localPosts: [],
      deletedPostsId: [],
    })
  })

  test('should set postId', () => {
    const id = 10
    const actual = postsReducer(initialState, setPostId(id))
    expect(actual.postId).toEqual(id)
  })

  test('should add id to deletePostsId array', () => {
    const id = 10
    const actual = postsReducer(initialState, deletePost(id))
    expect(actual.deletedPostsId.length).toEqual(1)
    expect(actual.deletedPostsId[0]).toEqual(id)
  })

  test('should update posts if id is found in posts', () => {
    const changeTitle = 'Kumparan Social Media Dashboard'
    const changeBody = 'For Frontend Technical Assessment'
    const actual = postsReducer(
      initialState,
      updateLocalPost({
        userId: 10,
        id: 91,
        title: changeTitle,
        body: changeBody,
      }),
    )

    expect(actual.posts[0].title).toEqual(changeTitle)
    expect(actual.posts[0].body).toEqual(changeBody)
    expect(actual.posts[0].userId).toEqual(10)
    expect(actual.posts[0].id).toEqual(91)
  })

  test('should not update posts if id is not found', () => {
    const changeTitle = 'Kumparan Social Media Dashboard'
    const changeBody = 'For Frontend Technical Assessment'
    const actual = postsReducer(
      initialState,
      updateLocalPost({
        userId: 10,
        id: 94,
        title: changeTitle,
        body: changeBody,
      }),
    )

    expect(actual.posts[0].title).toEqual(posts[0].title)
    expect(actual.posts[0].body).toEqual(posts[0].body)
    expect(actual.posts[0].userId).toEqual(10)
    expect(actual.posts[0].id).toEqual(91)
  })
})
