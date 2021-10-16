import PropTypes from 'prop-types'
import { Box, Grid, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Spinner } from '@chakra-ui/react'

import AlbumThumbnail from './AlbumThumbnail'
import { useGetPhotosQuery } from './albumsAPI'

const AlbumItem = ({ id, title }) => {
  const { data, error, isLoading } = useGetPhotosQuery(id)

  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Grid templateColumns="repeat(auto-fill, minmax(50px, 1fr))">
          {error && error.message}
          {isLoading && <Spinner />}
          {data &&
            data.map((image) => {
              return <AlbumThumbnail key={image.id} url={image.url} thumbnailUrl={image.thumbnailUrl} />
            })}
        </Grid>
      </AccordionPanel>
    </AccordionItem>
  )
}

AlbumItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
}

export default AlbumItem
