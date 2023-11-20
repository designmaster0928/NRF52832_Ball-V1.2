import React, {
  FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Flex } from 'native-base';

import { MainHeader } from 'components/headers/MainHeader';
import HistoryList from 'components/lists/HistoryList';
import { handleRemoveUserStatSession } from 'helpers/session.helper';
import { UserStatSession } from 'models/user-stats.model';

import { useStoredBallSessionsManipulate } from '../../hooks/useStoredBallSessions.hook';
import { useUserId } from '../../hooks/useUserId.hook';
import { mapSessionToWorkoutHistory } from '../../utils/history.util';

const ProfileWorkoutHistoryScreen: FC = () => {
  const userId = useUserId();

  const [storedSessions, setStoredSessions] = useState<
    Array<UserStatSession | null | undefined>
  >([]);

  const didSetSessions = useRef(false);

  const [sessions, updateSession, deleteSession] =
    useStoredBallSessionsManipulate();

  useEffect(() => {
    if (sessions && !didSetSessions.current) {
      setStoredSessions(sessions);
      didSetSessions.current = true;
    }
  }, [sessions]);

  // WE are going to have to pull the data directly from the index or modify the array ourselves.

  const mappedSessions = useMemo(() => {
    return mapSessionToWorkoutHistory(storedSessions as any);
  }, [storedSessions]);

  /*
   * UseEffect(() => {
   *   if (sessions) {
   *     setNumSession(sessions.length);
   *   }
   * }, [sessions]);
   */

  // Console.log(numSessions);

  console.log(sessions.length);

  const handleDeleteSession = useCallback(
    (id: string) => {
      if (id && userId) {
        handleRemoveUserStatSession(deleteSession, id, userId);

        setStoredSessions((prevSessions) => {
          const filteredSessions = prevSessions.filter((session) => {
            return session?.achievementId !== id;
          });
          return filteredSessions;
        });
      }
    },
    [deleteSession, userId],
  );

  return (
    <Flex flex={1}>
      <MainHeader title={'Workout History'} canGoBack={true} />
      <HistoryList
        data={mappedSessions}
        handleDeleteItem={handleDeleteSession}
      />
    </Flex>
  );
};

export default ProfileWorkoutHistoryScreen;
