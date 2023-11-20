import React, { FC, useCallback, useRef, useState } from 'react';
import { AlertDialog, Button, Flex } from 'native-base';

import { MainHeader } from 'components/headers/MainHeader';
import MenuList from 'components/lists/MenuList';
import { deleteUser } from 'services/user.service';

import { useUser } from '../../hooks/useUser.hook';

const ProfileAccountSettingsScreen: FC = () => {
  const [isShouldDeleteUserOpen, setIsShouldDeleteUserOpen] = useState(false);
  const cancelRef = useRef(null);
  const user = useUser();

  const handleCloseAlert = useCallback(() => {
    setIsShouldDeleteUserOpen(false);
  }, []);

  const handleDelete = useCallback(() => {
    deleteUser();
    setIsShouldDeleteUserOpen(false);
  }, []);

  return (
    <>
      <Flex flex={1}>
        <MainHeader title={'Account Settings'} canGoBack={true} />
        <MenuList
          items={[
            {
              onPress: (): void => {
                setIsShouldDeleteUserOpen(true);
              },
              title: 'Delete Account',
            },
            /*
             * {
             *   navigationName: ProfileNavigation.ProfileAppSettingsScreen,
             *   title: 'App Settings',
             * },
             * {
             *   navigationName: ProfileNavigation.ProfileDeviceSettingsScreen,
             *   title: 'Equipment / Device Settings',
             * },
             */
          ]}
          containerProps={{ mb: 8, mt: 6 }}
        />
      </Flex>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isShouldDeleteUserOpen}
        onClose={handleCloseAlert}
      >
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Delete Account</AlertDialog.Header>
          <AlertDialog.Body>
            {`This will remove all data relating to ${user.email}. This action cannot be reversed. Deleted data cannot be recovered.`}
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button
                variant="unstyled"
                colorScheme="coolGray"
                onPress={handleCloseAlert}
                ref={cancelRef}
              >
                Cancel
              </Button>
              <Button colorScheme="danger" onPress={handleDelete}>
                Delete
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </>
  );
};

export default ProfileAccountSettingsScreen;
