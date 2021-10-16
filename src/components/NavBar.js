import PropTypes from 'prop-types'
import { Grid, Heading } from '@chakra-ui/react'

const NavBar = ({ children }) => {
  return (
    <Grid templateColumns="max-content 1fr" alignItems="center" paddingBlock="4" gap="5">
      <Heading as="h1" size="md">
        Dashboard
      </Heading>
      <Grid autoFlow="column dense" gap="5" alignItems="center" justifyContent="space-between">
        {children}
      </Grid>
    </Grid>
  )
}

NavBar.propTypes = {
  children: PropTypes.node,
}

export default NavBar
