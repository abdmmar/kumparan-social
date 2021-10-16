import * as React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { Flex, Grid, Icon, Text } from '@chakra-ui/react'
import { GlobeAltIcon, MailIcon, PhoneIcon } from '@heroicons/react/outline'

import { useLazyGetUserQuery } from './usersAPI'
import { setUserId } from './usersSlice'

const CardUser = ({ id, name, username, website, email, phone }) => {
  const dispatch = useDispatch()
  const [trigger] = useLazyGetUserQuery(id)

  const handleClick = () => {
    trigger(id)
    dispatch(setUserId(id)) // Manually set userId to use in UserDetail component
  }

  return (
    <Grid autoFlow="row" gap="2" padding="4" boxShadow="md" rounded="sm" onClick={handleClick} cursor="pointer">
      <Text as="strong">{name}</Text>
      <Text as="i">@{username}</Text>
      <Flex direction="row" gridGap="2" alignItems="center">
        <Icon as={GlobeAltIcon} />
        <Text>{website}</Text>
      </Flex>
      <Flex direction="row" gridGap="2" alignItems="center">
        <Icon as={MailIcon} />
        <Text>{email}</Text>
      </Flex>
      <Flex direction="row" gridGap="2" alignItems="center">
        <Icon as={PhoneIcon} />
        <Text>{phone}</Text>
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
