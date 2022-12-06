import React from 'react';
import DataEntry from '../../components/DataEntry/DataEntry';
import Screen from '../../components/shared/Screen/Screen';
import { useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/store';

const HomeScreen = () => {
  const { entries: moodEntries } = useAppSelector(
    (state: RootState) => state.mood,
  );
  return (
    <Screen>
      <DataEntry entries={moodEntries} />
    </Screen>
  );
};

export default HomeScreen;
