import { useSelector } from 'react-redux'
import {
  Flex,
  Grid,
  Heading,
  Icon,
  Image,
  Link,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Spinner,
} from '@chakra-ui/react'
import {
  OfficeBuildingIcon,
  GlobeAltIcon,
  IdentificationIcon,
  MailIcon,
  PhoneIcon,
  MapIcon,
} from '@heroicons/react/outline'

import { AlbumList } from 'features/albums/components'
import { PostList, PostAddForm } from 'features/posts/components'
import { selectUser } from '../usersAPI'
import { selectUserId } from '../usersSlice'

const UserDetail = () => {
  // Get userId from UserCard
  const userId = useSelector(selectUserId)
  // Use userId from UserCard to get cached data
  const { data, error, isLoading, isSuccess } = useSelector(selectUser(userId !== -1 && userId))

  return (
    <Grid autoFlow="row" height="fit-content" gap="5">
      <Flex direction="row" gridGap="2" alignItems="center">
        <Icon as={IdentificationIcon} width="6" height="6" />
        <Heading as="h3" size="md" id="user-profile">
          User Profile
        </Heading>
      </Flex>
      {error && 'Oh no, there was something wrong'}
      {isLoading && <Spinner />}
      {isSuccess && data && (
        <Grid padding="4" boxShadow="lg" height="fit-content" gap="5" rounded="sm">
          <Grid autoFlow="row" gap="5" height="fit-content">
            <Flex direction={{ base: 'column', lg: 'row' }} gridGap="4" alignItems={{ base: 'start', lg: 'end' }}>
              <Image
                boxSize={{ base: '80px', lg: '190px' }}
                objectFit="cover"
                rounded="md"
                src="https://via.placeholder.com/190"
                alt={data.name}
              />
              <Flex direction="column" gap="1">
                <Flex direction="row" gridGap="2" alignItems="center">
                  <Text as="strong">{data.name}</Text>
                  <Text as="small">@{data.username}</Text>
                </Flex>
                <Flex direction="row" gridGap="2" alignItems="center">
                  <Icon as={GlobeAltIcon} />
                  <Text>
                    <Link color="blue.500" href={`http://www.${data.website}`} isExternal>
                      {data.website}
                    </Link>
                  </Text>
                </Flex>
                <Flex direction="row" gridGap="2" alignItems="center">
                  <Icon as={MailIcon} />
                  <Text>
                    <Link color="blue.500" href={`mailto:${data.email}`} isExternal>
                      {data.email}
                    </Link>
                  </Text>
                </Flex>
                <Flex direction="row" gridGap="2" alignItems="center">
                  <Icon as={PhoneIcon} />
                  <Text>
                    <Link color="blue.500" href={`tel:${data.phone}`} isExternal>
                      {data.phone}
                    </Link>
                  </Text>
                </Flex>
                <Flex direction="row" gridGap="2" alignItems="center">
                  <Icon as={MapIcon} />
                  <Text>
                    <Link
                      color="blue.500"
                      href={`https://www.google.com/maps?q=${data.address.geo.lat},${data.address.geo.lng}`}
                      isExternal
                    >
                      {data.address.suite}, {data.address.street}, {data.address.city} {data.address.zipcode}
                    </Link>
                  </Text>
                </Flex>
                <Flex direction="row" gridGap="2" alignItems="center">
                  <Icon as={OfficeBuildingIcon} />
                  <Text>{data.company.name}</Text>
                </Flex>
              </Flex>
            </Flex>
          </Grid>
          <Tabs>
            <TabList>
              <Tab>Posts</Tab>
              <Tab>Albums</Tab>
            </TabList>

            <TabPanels>
              <TabPanel padding="0" marginTop="4">
                <PostAddForm />
                <PostList />
              </TabPanel>
              <TabPanel padding="0" marginTop="4">
                <AlbumList />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Grid>
      )}
    </Grid>
  )
}

export default UserDetail
