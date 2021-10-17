import * as React from 'react'
import PropTypes from 'prop-types'
import {
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
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { DotsHorizontalIcon } from '@heroicons/react/outline'

import { CommentList, CommentAddForm } from 'features/comments/components'
import { setPostId } from '../postsSlice'
import PostModalEdit from './PostModalEdit'
import PostAlertDelete from './PostAlertDelete'

const PostItem = ({ id, title, body }) => {
  const dispatch = useDispatch()
  const modalComment = useDisclosure()
  const modalEditComment = useDisclosure()

  const [isAlertOpen, setIsAlertOpen] = React.useState(false)
  const onAlertClose = () => setIsAlertOpen(false)
  const onAlertOpen = () => setIsAlertOpen(true)

  const handleModalCommentOpen = () => {
    modalComment.onOpen()
    dispatch(setPostId(id))
  }

  const handleModalEditCommentOpen = () => {
    modalEditComment.onOpen()
  }

  return (
    <>
      <Grid padding="4" gap="4" autoFlow="row" border="1px solid gray" rounded="sm" borderColor="gray.200">
        <Flex direction="row" justifyContent="space-between" alignItems="center">
          <Text as="strong">{title}</Text>
          <Menu placement="bottom-end">
            <MenuButton as={IconButton} size="xs" aria-label="Options" icon={<DotsHorizontalIcon />} variant="none" />
            <MenuList>
              <MenuItem onClick={handleModalEditCommentOpen}>Edit Post</MenuItem>
              <MenuItem onClick={onAlertOpen}>Delete Post</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Text>{body}</Text>
        <Divider />
        <Button onClick={handleModalCommentOpen} cursor="pointer">
          <Text>See all comments</Text>
        </Button>
      </Grid>

      <Modal isOpen={modalComment.isOpen} onClose={modalComment.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader marginRight="5">{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CommentList />
            <CommentAddForm />
          </ModalBody>
        </ModalContent>
      </Modal>

      <PostModalEdit data={{ id, title, body }} isOpen={modalEditComment.isOpen} onClose={modalEditComment.onClose} />

      <PostAlertDelete id={id} isOpen={isAlertOpen} onClose={onAlertClose} />
    </>
  )
}

PostItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
}

export default PostItem
