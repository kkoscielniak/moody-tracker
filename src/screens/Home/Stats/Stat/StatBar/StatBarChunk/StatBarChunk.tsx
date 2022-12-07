import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import mapMoodLevelToColor from '../../../../../../utils/mapMoodLevelToColor';

interface Props {
  moodLevel: number;
}
const StatBarChunk: FC<Props> = ({ moodLevel }) => {
  const styles = getStyles({ moodLevel });
  return <View style={styles.chunk} />;
};

const getStyles = ({ moodLevel }: { moodLevel: number }) => {
  const backgroundColor = mapMoodLevelToColor(moodLevel);

  return StyleSheet.create({
    chunk: {
      flex: 1,
      backgroundColor,
    },
  });
};

export default StatBarChunk;
