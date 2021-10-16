import PropTypes from 'prop-types'
import { Box, Grid, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'

import AlbumThumbnail from './AlbumThumbnail'

const AlbumItem = ({ id, title }) => {
  const images = [
    {
      albumId: 1,
      id: 1,
      title: 'accusamus beatae ad facilis cum similique qui sunt',
      url: 'https://via.placeholder.com/600/92c952',
      thumbnailUrl: 'https://via.placeholder.com/150/92c952',
    },
    {
      albumId: 1,
      id: 2,
      title: 'reprehenderit est deserunt velit ipsam',
      url: 'https://via.placeholder.com/600/771796',
      thumbnailUrl: 'https://via.placeholder.com/150/771796',
    },
    {
      albumId: 1,
      id: 3,
      title: 'officia porro iure quia iusto qui ipsa ut modi',
      url: 'https://via.placeholder.com/600/24f355',
      thumbnailUrl: 'https://via.placeholder.com/150/24f355',
    },
    {
      albumId: 1,
      id: 4,
      title: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
      url: 'https://via.placeholder.com/600/d32776',
      thumbnailUrl: 'https://via.placeholder.com/150/d32776',
    },
    {
      albumId: 1,
      id: 5,
      title: 'natus nisi omnis corporis facere molestiae rerum in',
      url: 'https://via.placeholder.com/600/f66b97',
      thumbnailUrl: 'https://via.placeholder.com/150/f66b97',
    },
  ]

  return (
    <AccordionItem>
      <h2>
        <AccordionButton onClick={() => console.log('Hi', id)}>
          <Box flex="1" textAlign="left">
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Grid templateColumns="repeat(auto-fill, minmax(110px, 1fr))">
          {images &&
            images.map((image) => {
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
