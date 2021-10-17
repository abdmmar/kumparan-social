import React from 'react'
import { Divider, Container, Grid } from '@chakra-ui/react'

import NavBar from 'components/NavBar'
import { UserDetail, UserList } from 'features/users/components'

function App() {
  return (
    <Container maxWidth="container.lg">
      <NavBar />
      <Divider />
      <Grid as="main" templateColumns="35% 1fr" gap="4" marginBlock="10">
        <UserList />
        <UserDetail />
      </Grid>
    </Container>
  )
}

export default App
