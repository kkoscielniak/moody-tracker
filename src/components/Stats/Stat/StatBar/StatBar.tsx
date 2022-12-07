import React, { FC } from 'react';
import { Text, View } from 'react-native';
import MoodEntry from '../../../../types/MoodEntry';
import getStyles from './getStyles';
import { groupBy } from 'lodash';
import StatBarChunk from './StatBarChunk/StatBarChunk';

interface Props {
  entries: MoodEntry[];
  largestGroupLength: number;
}

const StatBar: FC<Props> = ({ entries, largestGroupLength }) => {
  const entriesByMoodLevel = groupBy(entries, 'moodLevel');

  const styles = getStyles({
    entriesLength: entries.length,
    largestGroupLength,
  });

  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        {entriesByMoodLevel[1]?.map(() => (
          <StatBarChunk moodLevel={1} />
        ))}
        {entriesByMoodLevel[2]?.map(() => (
          <StatBarChunk moodLevel={2} />
        ))}
        {entriesByMoodLevel[3]?.map(() => (
          <StatBarChunk moodLevel={3} />
        ))}
        {entriesByMoodLevel[4]?.map(() => (
          <StatBarChunk moodLevel={4} />
        ))}
        {entriesByMoodLevel[5]?.map(() => (
          <StatBarChunk moodLevel={5} />
        ))}
        <View style={styles.spacer} />
      </View>
      <View style={styles.box}>
        <Text style={styles.boxText}>{entries.length}</Text>
      </View>
    </View>
  );
};

export default StatBar;
