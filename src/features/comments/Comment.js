import * as React from 'react'
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

const Comment = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const cancelRef = React.useRef()

  const onClose = () => setIsOpen(false)

  return (
    <>
      <Grid padding="4" gap="4" autoFlow="row" border="1px solid gray" rounded="sm" borderColor="gray.200">
        <Flex direction="row" justifyContent="space-between" alignItems="flex-start">
          <Flex direction="column">
            <Text as="strong">Name</Text>
            <Text as="small">Email</Text>
          </Flex>
          <Menu placement="bottom-end">
            <MenuButton as={IconButton} size="xs" aria-label="Options" icon={<DotsHorizontalIcon />} variant="none" />
            <MenuList>
              <MenuItem onClick={() => alert('Edit Comment')}>Edit Comment</MenuItem>
              <MenuItem onClick={() => setIsOpen(true)}>Delete Comment</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Text>Body</Text>
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

export default Comment
