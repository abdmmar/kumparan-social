import * as React from 'react'
import PropTypes from 'prop-types'
import { IconButton, Grid, Flex, Text, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/hooks'
import { DotsHorizontalIcon } from '@heroicons/react/outline'

import CommentAlertDelete from './CommentAlertDelete'
import CommentModalEdit from './CommentModalEdit'

const CommentItem = ({ id, name, email, body }) => {
  const modalEditComment = useDisclosure()
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
              <MenuItem onClick={modalEditComment.onOpen}>Edit Comment</MenuItem>
              <MenuItem onClick={onOpen}>Delete Comment</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Text>{body}</Text>
      </Grid>

      <CommentModalEdit
        data={{ id, name, email, body }}
        isOpen={modalEditComment.isOpen}
        onClose={modalEditComment.onClose}
      />

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
