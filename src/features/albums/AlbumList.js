import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Accordion } from '@chakra-ui/react'

import AlbumItem from './AlbumItem'
import { useLazyGetAlbumsQuery } from './albumsAPI'
import { selectUserId } from 'features/users/usersSlice'

const AlbumList = () => {
  const userId = useSelector(selectUserId)
  const [trigger, { data }] = useLazyGetAlbumsQuery(userId)

  useEffect(() => {
    trigger(userId)
  }, [userId])

  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      {data &&
        data.map((album) => {
          return <AlbumItem key={album.id} id={album.id} title={album.title} />
        })}
    </Accordion>
  )
}

export default AlbumList
