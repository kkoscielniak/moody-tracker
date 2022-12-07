import React, { FC } from 'react';
import { View } from 'react-native';
import MoodEntry from '../../../../types/MoodEntry';
import getStyles from './getStyles';

interface Props {
  entries: MoodEntry[];
  largestGroupLength: number;
}

const StatBar: FC<Props> = ({ entries, largestGroupLength }) => {
  const styles = getStyles({
    entriesLength: entries.length,
    largestGroupLength,
  });

  return <View style={styles.bar} />;
};

export default StatBar;
