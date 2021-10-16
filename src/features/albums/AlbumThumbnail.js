import PropTypes from 'prop-types'
import {
  Box,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'

const AlbumThumbnail = ({ title, url, thumbnailUrl }) => {
  const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure()

  return (
    <>
      <Box onClick={onModalOpen} cursor="pointer">
        <Image objectFit="cover" src={thumbnailUrl} alt={title} />
      </Box>

      <Modal isOpen={isModalOpen} onClose={onModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton color="white" bgColor="gray.700" />
          <ModalBody padding="0">
            <Image objectFit="cover" src={url} alt={title} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

AlbumThumbnail.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  thumbnailUrl: PropTypes.string,
}

export default AlbumThumbnail
