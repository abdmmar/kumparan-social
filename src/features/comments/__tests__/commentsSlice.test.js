import commentsReducer, { deleteComment, updateLocalComment } from '../commentsSlice'
import { comments } from 'test/data'

describe('Users Reducer', () => {
  const initialState = {
    comments: comments,
    localComments: [],
    deletedCommentsId: [],
  }

  test('should handle initial state', () => {
    expect(commentsReducer(undefined, { type: 'unknown' })).toEqual({
      comments: [],
      localComments: [],
      deletedCommentsId: [],
    })
  })

  test('should add id to deletedCommentsId array', () => {
    const id = 10
    const actual = commentsReducer(initialState, deleteComment(id))
    expect(actual.deletedCommentsId.length).toEqual(1)
    expect(actual.deletedCommentsId[0]).toEqual(id)
  })

  test('should update posts if id is found in posts', () => {
    const changeBody = 'Kumparan Social Media For Frontend Technical Assessment'
    const actual = commentsReducer(
      initialState,
      updateLocalComment({
        postId: 91,
        id: 451,
        name: 'maiores ut dolores quo sapiente nisi',
        email: 'Duane_Dach@demario.us',
        body: changeBody,
      }),
    )

    expect(actual.comments[0].body).toEqual(changeBody)
    expect(actual.comments[0].name).toEqual('maiores ut dolores quo sapiente nisi')
    expect(actual.comments[0].email).toEqual('Duane_Dach@demario.us')
    expect(actual.comments[0].postId).toEqual(91)
    expect(actual.comments[0].id).toEqual(451)
  })

  test('should not update posts if id is not found', () => {
    const changeBody = 'For Frontend Technical Assessment'

    const actual = commentsReducer(
      initialState,
      updateLocalComment({
        userId: 10,
        id: 94,
        name: 'maiores ut dolores quo sapiente nisi',
        email: 'Duane_Dach@demario.us',
        body: changeBody,
      }),
    )

    expect(actual.comments[0].body).toEqual(comments[0].body)
    expect(actual.comments[0].name).toEqual('maiores ut dolores quo sapiente nisi')
    expect(actual.comments[0].email).toEqual('Duane_Dach@demario.us')
    expect(actual.comments[0].postId).toEqual(91)
    expect(actual.comments[0].id).toEqual(451)
  })
})
