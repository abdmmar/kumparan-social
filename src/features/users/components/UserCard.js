import * as React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { Flex, Grid, Text, Link } from '@chakra-ui/react'

import { useLazyGetUserQuery } from '../usersAPI'
import { setUserId } from '../usersSlice'

const CardUser = ({ id, name, username, email }) => {
  const dispatch = useDispatch()
  const [trigger] = useLazyGetUserQuery(id)

  React.useEffect(() => {
    trigger(id)
    dispatch(setUserId(id))
  }, [])

  const handleClick = () => {
    trigger(id)
    dispatch(setUserId(id)) // Manually set userId to use in UserDetail component
  }

  return (
    <Grid autoFlow="row" gap="2" padding="4" boxShadow="md" rounded="sm" onClick={handleClick} cursor="pointer">
      <Text as="strong" data-testid={`user-${id}`}>
        {name}
      </Text>
      <Flex direction="row" gridGap="2" alignItems="center">
        <Text as="small">
          @{username} •{' '}
          <Link color="blue.500" href={`mailto:${email}`} isExternal>
            {email}
          </Link>
        </Text>
      </Flex>
    </Grid>
  )
}

CardUser.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  username: PropTypes.string,
  website: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
}

export default CardUser
