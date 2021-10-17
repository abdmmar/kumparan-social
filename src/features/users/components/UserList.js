import { Heading, Flex, Icon, Grid, Spinner } from '@chakra-ui/react'
import { UsersIcon } from '@heroicons/react/outline'

import { useGetUsersQuery } from 'features/users/usersAPI'
import { UserCard } from 'features/users/components'

const UserList = () => {
  const { data: usersData, error: usersError, isLoading: isUsersLoading } = useGetUsersQuery()

  return (
    <Grid autoFlow="row" height="fit-content" gap="5">
      <Flex direction="row" gridGap="2" alignItems="center">
        <Icon as={UsersIcon} width="6" height="6" />
        <Heading as="h3" size="md">
          Users
        </Heading>
      </Flex>
      <Grid gap="4" height="fit-content">
        {usersError && 'Oh no, there was an error'}
        {isUsersLoading && <Spinner />}
        {usersData &&
          usersData.map((user) => {
            return <UserCard key={user.id} id={user.id} name={user.name} username={user.username} email={user.email} />
          })}
      </Grid>
    </Grid>
  )
}

export default UserList
