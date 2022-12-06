import React from 'react';
import { Text, View } from 'react-native';
import NewEntryTile from './NewEntryTile/NewEntryTile';
import styles from './styles';

const DataEntry: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>🙂 Mood</Text>
      <NewEntryTile />
    </View>
  );
};

export default DataEntry;
