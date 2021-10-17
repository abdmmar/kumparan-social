import PropTypes from 'prop-types'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react'

import CommentEditForm from './CommentEditForm'

const CommentModalEdit = ({ data, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader marginRight="5">{data.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <CommentEditForm data={data} onClose={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

CommentModalEdit.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    body: PropTypes.string,
  }),
}

export default CommentModalEdit
