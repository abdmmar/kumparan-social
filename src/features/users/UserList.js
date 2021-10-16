import { Grid, Spinner } from '@chakra-ui/react'

import { useGetUsersQuery } from 'features/users/usersAPI'
import UserCard from 'features/users/UserCard'

const UserList = () => {
  const { data: usersData, error: usersError, isLoading: isUsersLoading } = useGetUsersQuery()

  return (
    <Grid gap="4">
      {usersError && 'Oh no, there was an error'}
      {isUsersLoading && <Spinner />}
      {usersData &&
        usersData.map((user) => {
          return (
            <UserCard
              key={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
              website={user.website}
              phone={user.phone}
            />
          )
        })}
    </Grid>
  )
}

export default UserList
