import React, { FC } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const NewEntryTile: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.plusSign}>+</Text>
    </View>
  );
};

export default NewEntryTile;
