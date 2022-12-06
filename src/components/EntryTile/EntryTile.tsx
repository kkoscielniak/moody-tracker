import React, { FC, PropsWithChildren } from 'react';
import MoodEntry from '../../types/MoodEntry';
import Tile from '../shared/Tile/Tile';
import getStyles from './getStyles';

interface Props {
  entry: MoodEntry;
}

const EntryTile: FC<PropsWithChildren<Props>> = ({ entry: { moodLevel } }) => {
  const styles = getStyles({ moodLevel: moodLevel });

  return <Tile extendStyle={styles} content={moodLevel} />;
};

export default EntryTile;
