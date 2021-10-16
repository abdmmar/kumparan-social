import * as React from 'react'
import { useSelector } from 'react-redux'
import { Grid, Spinner } from '@chakra-ui/react'

import PostItem from './PostItem'
import { useLazyGetPostsQuery } from '../postsAPI'
import { selectAllDeletedPosts, selectAllPosts } from '../postsSlice'
import { selectUserId } from 'features/users/usersSlice'

const PostList = () => {
  const userId = useSelector(selectUserId)
  const posts = useSelector(selectAllPosts)
  const deletedPosts = useSelector(selectAllDeletedPosts)
  const [trigger, { data, error, isLoading }] = useLazyGetPostsQuery(userId)

  React.useEffect(() => {
    trigger(userId)
  }, [userId])

  return (
    <Grid>
      {error && 'Oh no, there was an error'}
      {isLoading && <Spinner />}
      {data &&
        posts.map((post) => {
          if (deletedPosts.includes(post.id)) return null
          return <PostItem key={post.id} id={post.id} title={post.title} body={post.body} />
        })}
    </Grid>
  )
}

export default PostList
