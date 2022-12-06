import React from 'react';
import { FC } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface Props {
  extendStyle: any;
  content: string | number;
}

const Tile: FC<Props> = ({ extendStyle, content }) => {
  return (
    <View style={[styles.container, extendStyle.container]}>
      <Text style={[styles.content, extendStyle.content]}>{content}</Text>
    </View>
  );
};

export default Tile;
