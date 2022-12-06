import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { Text, TouchableHighlight } from 'react-native';
import RootStackParams from '../../../types/RootStackParams';
import styles from './styles';

const NewEntryTile: FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const handlePress = () => {
    navigation.navigate('Entry');
  };

  return (
    <TouchableHighlight style={styles.container} onPress={handlePress}>
      <Text style={styles.plusSign}>+</Text>
    </TouchableHighlight>
  );
};

export default NewEntryTile;
