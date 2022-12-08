import React from 'react';
import { FC } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface Props {
  extendStyle: any;
  content: string | number;
  testID?: string;
}

const Tile: FC<Props> = ({ extendStyle, content, testID }) => (
  <View style={[styles.container, extendStyle.container]} testID={testID}>
    <Text
      style={[styles.content, extendStyle.content]}
      testID={`TileContent_${content}`}>
      {content}
    </Text>
  </View>
);

export default Tile;
