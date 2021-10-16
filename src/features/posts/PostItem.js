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
  Divider,
  Grid,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { DotsHorizontalIcon } from '@heroicons/react/outline'

import CommentList from 'features/comments/CommentList'
import { setPostId } from './postsSlice'

const PostItem = ({ id, title, body }) => {
  const dispatch = useDispatch()
  const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure()

  const [isOpen, setIsOpen] = React.useState(false)
  const cancelRef = React.useRef()

  const onClose = () => setIsOpen(false)

  const handleModalOpen = () => {
    onModalOpen()
    dispatch(setPostId(id))
  }

  return (
    <>
      <Grid padding="4" gap="4" autoFlow="row" border="1px solid gray" rounded="sm" borderColor="gray.200">
        <Flex direction="row" justifyContent="space-between" alignItems="center">
          <Text as="strong">{title}</Text>
          <Menu placement="bottom-end">
            <MenuButton as={IconButton} size="xs" aria-label="Options" icon={<DotsHorizontalIcon />} variant="none" />
            <MenuList>
              <MenuItem onClick={() => alert('Edit Post')}>Edit Post</MenuItem>
              <MenuItem onClick={() => setIsOpen(true)}>Delete Post</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Text>{body}</Text>
        <Divider />
        <Button onClick={handleModalOpen} cursor="pointer">
          <Text>See all comments</Text>
        </Button>
      </Grid>

      <Modal isOpen={isModalOpen} onClose={onModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CommentList />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onModalClose}>
              Add Comment
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

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
              <Button colorScheme="red" onClick={onClose} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

PostItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
}

export default PostItem
