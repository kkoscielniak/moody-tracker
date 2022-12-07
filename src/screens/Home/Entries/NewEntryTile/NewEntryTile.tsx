import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import RootStackParams from '../../../../types/RootStackParams';
import Tile from '../../../../shared/Tile/Tile';
import styles from './styles';

const NewEntryTile: FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const handlePress = () => {
    navigation.navigate('Entry');
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Tile extendStyle={styles} content="+" />
    </TouchableOpacity>
  );
};

export default NewEntryTile;
