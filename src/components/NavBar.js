import PropTypes from 'prop-types'
import { Flex, Icon, Grid, Heading } from '@chakra-ui/react'
import { DesktopComputerIcon } from '@heroicons/react/outline'

const NavBar = ({ children }) => {
  return (
    <Grid templateColumns="max-content 1fr" alignItems="center" paddingBlock="4" gap="5">
      <Flex direction="row" gridGap="2" alignItems="center">
        <Icon as={DesktopComputerIcon} width="8" height="8" />
        <Heading as="h1" size="lg">
          Dashboard
        </Heading>
      </Flex>

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
