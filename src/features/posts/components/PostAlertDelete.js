import * as React from 'react'
import PropTypes from 'prop-types'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { useDeletePostMutation } from '../postsAPI'
import { deletePost } from '../postsSlice'

const PostAlertDelete = ({ id, isOpen, onClose }) => {
  const dispatch = useDispatch()
  const [deletePostMutation] = useDeletePostMutation()

  const cancelRef = React.useRef()

  const handleDeletePost = () => {
    dispatch(deletePost(id))
    deletePostMutation(id)
    onClose()
  }

  return (
    <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Delete Post
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure want to delete this post? You cant undo this action afterwards.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={handleDeletePost} ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}

PostAlertDelete.propTypes = {
  id: PropTypes.number,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
}

export default PostAlertDelete
