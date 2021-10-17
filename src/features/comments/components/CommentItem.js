import * as React from 'react'
import PropTypes from 'prop-types'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  IconButton,
  Button,
  Grid,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { DotsHorizontalIcon } from '@heroicons/react/outline'

import { deleteComment } from '../commentsSlice'
import { useDeleteCommentMutation } from '../commentsAPI'

const CommentItem = ({ id, name, email, body }) => {
  const dispatch = useDispatch()
  const [deleteCommentMutation] = useDeleteCommentMutation()

  const [isOpen, setIsOpen] = React.useState(false)
  const cancelRef = React.useRef()

  const onClose = () => setIsOpen(false)

  const handleDeleteComment = () => {
    dispatch(deleteComment(id))
    deleteCommentMutation(id)
    onClose()
  }

  return (
    <>
      <Grid padding="4" gap="4" autoFlow="row" border="1px solid gray" rounded="sm" borderColor="gray.200">
        <Flex direction="row" justifyContent="space-between" alignItems="flex-start">
          <Flex direction="column">
            <Text as="strong">{name}</Text>
            <Text as="small">{email}</Text>
          </Flex>
          <Menu placement="bottom-end">
            <MenuButton as={IconButton} size="xs" aria-label="Options" icon={<DotsHorizontalIcon />} variant="none" />
            <MenuList>
              <MenuItem onClick={() => alert('Edit Comment')}>Edit Comment</MenuItem>
              <MenuItem onClick={() => setIsOpen(true)}>Delete Comment</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Text>{body}</Text>
      </Grid>

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
    </>
  )
}

CommentItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  body: PropTypes.string,
}

export default CommentItem
