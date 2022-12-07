import React from 'react';
import Stats from '../../components/Stats/Stats';
import Entries from '../../components/Entries/Entries';
import Screen from '../../components/shared/Screen/Screen';
import { useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/store';

const HomeScreen = () => {
  const { entries: moodEntries } = useAppSelector(
    (state: RootState) => state.mood,
  );

  return (
    <Screen>
      <Entries entries={moodEntries} />
      <Stats entries={moodEntries} />
    </Screen>
  );
};

export default HomeScreen;
