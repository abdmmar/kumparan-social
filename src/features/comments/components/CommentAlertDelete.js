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

import { deleteComment } from '../commentsSlice'
import { useDeleteCommentMutation } from '../commentsAPI'

const CommentAlertDelete = ({ id, isOpen, onClose }) => {
  const dispatch = useDispatch()
  const [deleteCommentMutation] = useDeleteCommentMutation()

  const cancelRef = React.useRef()

  const handleDeleteComment = () => {
    dispatch(deleteComment(id))
    deleteCommentMutation(id)
    onClose()
  }

  return (
    <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Delete Comment
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure want to delete this comment? You cant undo this action afterwards.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={handleDeleteComment} ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}

CommentAlertDelete.propTypes = {
  id: PropTypes.number,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
}

export default CommentAlertDelete
