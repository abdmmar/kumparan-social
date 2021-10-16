import { Flex, Grid, Icon, Image, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { OfficeBuildingIcon, GlobeAltIcon, MailIcon, PhoneIcon, MapIcon } from '@heroicons/react/outline'

import AlbumList from 'features/albums/AlbumList'
import AlbumItem from 'features/albums/AlbumItem'
import Post from 'features/posts/Post'

const UserDetail = () => {
  const address = {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496',
    },
  }

  const company = {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets',
  }

  const albums = [
    {
      userId: 1,
      id: 1,
      title: 'quidem molestiae enim',
    },
    {
      userId: 1,
      id: 2,
      title: 'sunt qui excepturi placeat culpa',
    },
    {
      userId: 1,
      id: 3,
      title: 'omnis laborum odio',
    },
    {
      userId: 1,
      id: 4,
      title: 'non esse culpa molestiae omnis sed optio',
    },
    {
      userId: 1,
      id: 5,
      title: 'eaque aut omnis a',
    },
    {
      userId: 1,
      id: 6,
      title: 'natus impedit quibusdam illo est',
    },
    {
      userId: 1,
      id: 7,
      title: 'quibusdam autem aliquid et et quia',
    },
    {
      userId: 1,
      id: 8,
      title: 'qui fuga est a eum',
    },
    {
      userId: 1,
      id: 9,
      title: 'saepe unde necessitatibus rem',
    },
    {
      userId: 1,
      id: 10,
      title: 'distinctio laborum qui',
    },
  ]

  return (
    <Grid padding="4" boxShadow="lg" height="fit-content" gap="5" rounded="sm">
      <Grid autoFlow="row" gap="5" height="fit-content">
        <Flex direction="row" gridGap="4" alignItems="end">
          <Image boxSize="190px" objectFit="cover" rounded="md" src="https://bit.ly/dan-abramov" alt="Leanne Graham" />
          <Flex direction="column" gap="1">
            <Text as="strong">Leanne Graham</Text>
            <Text as="i">@Bret</Text>
            <Flex direction="row" gridGap="2" alignItems="center">
              <Icon as={GlobeAltIcon} />
              <Text>hildegard.org</Text>
            </Flex>
            <Flex direction="row" gridGap="2" alignItems="center">
              <Icon as={MailIcon} />
              <Text>Sincere@apri.biz</Text>
            </Flex>
            <Flex direction="row" gridGap="2" alignItems="center">
              <Icon as={PhoneIcon} />
              <Text>+62 8123-9876-6572</Text>
            </Flex>
            <Flex direction="row" gridGap="2" alignItems="center">
              <Icon as={MapIcon} />
              <Text>
                {address.suite}, {address.street}, {address.city} {address.zipcode}
              </Text>
            </Flex>
            <Flex direction="row" gridGap="2" alignItems="center">
              <Icon as={OfficeBuildingIcon} />
              <Text>{company.name}</Text>
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
            <AlbumList>
              {albums &&
                albums.map((album) => {
                  return <AlbumItem key={album.id} id={album.id} title={album.title} />
                })}
            </AlbumList>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Grid>
  )
}

export default UserDetail
