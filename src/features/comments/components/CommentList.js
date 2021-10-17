import * as React from 'react'
import { useSelector } from 'react-redux'
import { Grid, Spinner } from '@chakra-ui/react'

import CommentItem from './CommentItem'
import { useLazyGetCommentsQuery } from '../commentsAPI'
import { selectAllComments, selectAllDeletedComments } from '../commentsSlice'
import { selectPostId } from 'features/posts/postsSlice'

const PostList = () => {
  const postId = useSelector(selectPostId)
  const comments = useSelector(selectAllComments)
  const deletedComments = useSelector(selectAllDeletedComments)
  const [trigger, { data, error, isLoading }] = useLazyGetCommentsQuery(postId)

  React.useEffect(() => {
    trigger(postId)
  }, [postId])

  return (
    <Grid>
      {error && 'Oh no, there was an error'}
      {isLoading && <Spinner />}
      {data &&
        comments.map((comment) => {
          if (deletedComments.includes(comment.id)) return null

          return (
            <CommentItem
              key={comment.id}
              id={comment.id}
              name={comment.name}
              email={comment.email}
              body={comment.body}
            />
          )
        })}
    </Grid>
  )
}

export default PostList
