import React from 'react'
import { Container, Grid } from '@chakra-ui/react'

import NavBar from 'components/NavBar'
import { UserDetail, UserList } from 'features/users/components'

function App() {
  return (
    <Container maxWidth="container.xl">
      <NavBar />
      <Grid as="main" templateColumns="20% 1fr 25%" gap="4">
        <UserList />
        <UserDetail />
        <Grid></Grid>
      </Grid>
    </Container>
  )
}

export default App
