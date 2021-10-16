import React from 'react'
import { Container, Grid } from '@chakra-ui/react'

import NavBar from 'components/NavBar'
import UserList from 'features/users/UserList'
import UserDetail from 'features/users/UserDetail'

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
