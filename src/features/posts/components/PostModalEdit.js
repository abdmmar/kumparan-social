import PropTypes from 'prop-types'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react'

import PostEditForm from './PostEditForm'

const PostModalEdit = ({ data, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader marginRight="5">{data.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <PostEditForm data={data} onClose={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

PostModalEdit.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
  }),
}

export default PostModalEdit
