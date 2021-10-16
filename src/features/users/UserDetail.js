import { useSelector } from 'react-redux'
import { Flex, Grid, Icon, Image, Text, Tabs, TabList, TabPanels, Tab, TabPanel, Spinner } from '@chakra-ui/react'
import { OfficeBuildingIcon, GlobeAltIcon, MailIcon, PhoneIcon, MapIcon } from '@heroicons/react/outline'

import AlbumList from 'features/albums/AlbumList'
import Post from 'features/posts/Post'
import { selectUser } from './usersAPI'
import { selectUserId } from './usersSlice'

const UserDetail = () => {
  // Get userId from UserCard
  const userId = useSelector(selectUserId)
  // Use userId from UserCard to get cached data
  const { data, error, isLoading, isSuccess } = useSelector(selectUser(userId !== -1 && userId))

  return (
    <>
      {error && 'Oh no, there was something wrong'}
      {isLoading && <Spinner />}
      {isSuccess && data && (
        <Grid padding="4" boxShadow="lg" height="fit-content" gap="5" rounded="sm">
          <Grid autoFlow="row" gap="5" height="fit-content">
            <Flex direction="row" gridGap="4" alignItems="end">
              <Image
                boxSize="190px"
                objectFit="cover"
                rounded="md"
                src="https://via.placeholder.com/190"
                alt={data.name}
              />
              <Flex direction="column" gap="1">
                <Text as="strong">{data.name}</Text>
                <Text as="i">{data.username}</Text>
                <Flex direction="row" gridGap="2" alignItems="center">
                  <Icon as={GlobeAltIcon} />
                  <Text>{data.website}</Text>
                </Flex>
                <Flex direction="row" gridGap="2" alignItems="center">
                  <Icon as={MailIcon} />
                  <Text>{data.email}</Text>
                </Flex>
                <Flex direction="row" gridGap="2" alignItems="center">
                  <Icon as={PhoneIcon} />
                  <Text>{data.phone}</Text>
                </Flex>
                <Flex direction="row" gridGap="2" alignItems="center">
                  <Icon as={MapIcon} />
                  <Text>
                    {data.address.suite}, {data.address.street}, {data.address.city} {data.address.zipcode}
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
                <Post />
              </TabPanel>
              <TabPanel padding="0" marginTop="4">
                <AlbumList />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Grid>
      )}
    </>
  )
}

export default UserDetail
