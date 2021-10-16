import PropTypes from 'prop-types'
import { Flex, Grid, Icon, Text } from '@chakra-ui/react'
import { GlobeAltIcon, MailIcon, PhoneIcon } from '@heroicons/react/outline'
import React from 'react'

const CardUser = ({ name, username, website, email, phone }) => {
  return (
    <Grid autoFlow="row" gap="2" padding="4" boxShadow="md" rounded="sm">
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
  name: PropTypes.string,
  username: PropTypes.string,
  website: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
}

export default CardUser
