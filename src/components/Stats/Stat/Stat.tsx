import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';
import colors from '../../../theme/colors';
import { MoodEntryGroup } from '../../../types/MoodChartData';
import StatBar from './StatBar/StatBar';

interface Props {
  moodEntryGroup: MoodEntryGroup;
  largestGroupLength: number;
}

const capitalize = (s: string): string =>
  s.charAt(0).toUpperCase() + s.slice(1);

const Stat: FC<Props> = ({
  moodEntryGroup: { feeling, entries },
  largestGroupLength,
}) => {
  return (
    <>
      <Text style={styles.title}>{capitalize(feeling)}</Text>
      {/* <View style={styles.bar} /> */}
      <StatBar entries={entries} largestGroupLength={largestGroupLength} />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 13,
    lineHeight: 16,
    marginBottom: 10,
    color: colors.fontBlue,
  },
});

export default Stat;
