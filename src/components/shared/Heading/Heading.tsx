import React, { FC } from 'react';
import { Text } from 'react-native';
import getStyles from './getStyles';

interface Props {
  content: string;
  isTop?: boolean;
}

const Heading: FC<Props> = ({ content, isTop }) => {
  const styles = getStyles({ isTop });

  return <Text style={styles.text}>{content}</Text>;
};

export default Heading;
