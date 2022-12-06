import React, { FC } from 'react';
import { FlatList } from 'react-native';
import MoodEntry from '../../types/MoodEntry';
import EntryTile from '../EntryTile/EntryTile';
import NewEntryTile from '../NewEntryTile/NewEntryTile';
import Container from '../shared/Container/Container';
import Heading from '../shared/Heading/Heading';

interface Props {
  entries: MoodEntry[];
}

const DataEntry: FC<Props> = ({ entries }) => {
  const renderItem = ({ item }: { item: MoodEntry }) => (
    <EntryTile entry={item} />
  );

  return (
    <Container>
      <Heading content="Recent Moodies 😉" isTop />
      <FlatList
        horizontal
        data={entries}
        renderItem={renderItem}
        ListFooterComponent={NewEntryTile}
      />
    </Container>
  );
};

export default DataEntry;
