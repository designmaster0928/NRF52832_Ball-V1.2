import React, { FC, useState } from 'react';
import { SectionListData } from 'react-native';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons/faUserPlus';
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Spacer,
  VStack,
} from 'native-base';

import AddAllButton from 'components/buttons/AddAllButton';
import SearchBar from 'components/forms/SearchBar';
import TeammateSectionHeader from 'components/headers/TeammateSectionHeader';
import RoundImageTitleSectionList from 'components/lists/RoundImageTitleSectionList';
import { TeammateTabNavigation } from 'enums/navigation.enum';
import { RoundImageTitleListDataItem } from 'models/list.model';

import { data as mockData } from '../mocks/profile-teammates.mock';

interface Props {
  selectedTab: TeammateTabNavigation;
}

const contactsData: Array<SectionListData<RoundImageTitleListDataItem>> = [
  {
    data: mockData.slice(0, 4).map((item: RoundImageTitleListDataItem) => {
      const tmpItem = { ...item, icon: faUserPlus };
      return tmpItem;
    }),
    title: { Button: <AddAllButton />, title: '4 Contacts on REPS' },
  },
  {
    data: mockData.slice(0, 14).map((item: RoundImageTitleListDataItem) => {
      const tmpItem = { ...item, icon: faPaperPlane };
      delete tmpItem.imageSource;
      return tmpItem;
    }),
    title: { title: 'Invite Contact to REPS' },
  },
];

const usernameData: Array<SectionListData<RoundImageTitleListDataItem>> = [
  {
    data: mockData.slice(0, 4).map((item: RoundImageTitleListDataItem) => {
      const tmpItem = { ...item, icon: faUserPlus };
      return tmpItem;
    }),
  },
];

const ContactsTab: FC = (): JSX.Element => {
  const [isPermissionGranted, setIsPermissionGranted] = useState(false);
  return (
    <>
      {isPermissionGranted ? (
        <RoundImageTitleSectionList
          data={contactsData}
          SectionHeader={TeammateSectionHeader}
        />
      ) : (
        <Flex flex={1} mt={'55%'}>
          <VStack width={'100%'}>
            <Center>
              <Heading
                fontWeight={700}
                fontSize={16}
                lineHeight={22}
                textAlign={'center'}
              >
                No permissions have been{'\n'}granted for contacts.
              </Heading>
            </Center>
            <Button
              bg={'secondary.400'}
              mt={4}
              mx={6}
              onPress={(): void => {
                setIsPermissionGranted(true);
              }}
              _text={{ fontSize: 11, fontWeight: 700, lineHeight: 16 }}
            >
              Click here to grant access
            </Button>
          </VStack>
        </Flex>
      )}
    </>
  );
};

const UsernameTab: FC = (): JSX.Element => {
  return (
    <VStack flex={1}>
      <SearchBar />
      <Box h={2} />
      <RoundImageTitleSectionList
        data={usernameData}
        SectionHeader={TeammateSectionHeader}
      />
    </VStack>
  );
};

const AddATeammateTabNavigation: FC<Props> = ({ selectedTab }): JSX.Element => {
  switch (selectedTab) {
    case TeammateTabNavigation.Contacts:
      return <ContactsTab />;
    case TeammateTabNavigation.Username:
      return <UsernameTab />;
    default:
      return <></>;
  }
};

export default AddATeammateTabNavigation;
