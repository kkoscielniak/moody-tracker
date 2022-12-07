import React, { FC } from 'react';
import { Text } from 'react-native';
import MoodEntry from '../../types/MoodEntry';

interface Props {
  moodEntries?: MoodEntry[];
}

const Bar: FC<Props> = ({ moodEntries }) => {
  if (!moodEntries) {
    return null;
  }

  return <Text>Happy</Text>;
};

export default Bar;
