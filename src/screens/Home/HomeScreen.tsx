import React from 'react';
import Stats from './Stats/Stats';
import Entries from './Entries/Entries';
import Screen from '../../shared/Screen/Screen';
import { useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/store';

const HomeScreen = () => {
  const { entries: moodEntries } = useAppSelector(
    (state: RootState) => state.mood,
  );

  return (
    <Screen>
      <Entries entries={moodEntries} />
      {moodEntries.length ? <Stats entries={moodEntries} /> : null}
    </Screen>
  );
};

export default HomeScreen;
