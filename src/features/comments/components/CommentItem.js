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
import { DotsHorizontalIcon } from '@heroicons/react/outline'

import CommentAlertDelete from './CommentAlertDelete'

const CommentItem = ({ id, name, email, body }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const onClose = () => setIsOpen(false)
  const onOpen = () => setIsOpen(true)

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
              <MenuItem onClick={onOpen}>Delete Comment</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Text>{body}</Text>
      </Grid>

      <CommentAlertDelete id={id} isOpen={isOpen} onClose={onClose} />
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
