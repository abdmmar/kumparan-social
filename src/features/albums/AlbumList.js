import PropTypes from 'prop-types'
import { Accordion } from '@chakra-ui/react'

const AlbumList = ({ children }) => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      {children}
    </Accordion>
  )
}

AlbumList.propTypes = {
  children: PropTypes.node,
}

export default AlbumList
