import React, { FC } from 'react';
import { FlatList, Text, View } from 'react-native';
import MoodEntry from '../../types/MoodEntry';
import EntryTile from '../EntryTile/EntryTile';
import NewEntryTile from '../NewEntryTile/NewEntryTile';
import Heading from '../shared/Heading/Heading';
import styles from './styles';

interface Props {
  entries: MoodEntry[];
}

const DataEntry: FC<Props> = ({ entries }) => {
  const renderItem = ({ item }: { item: MoodEntry }) => (
    <EntryTile entry={item} />
  );

  return (
    <View style={styles.container}>
      <Heading content="Your Moodies 😉" isTop />
      <FlatList
        horizontal
        data={entries}
        renderItem={renderItem}
        ListFooterComponent={NewEntryTile}
      />
    </View>
  );
};

export default DataEntry;
