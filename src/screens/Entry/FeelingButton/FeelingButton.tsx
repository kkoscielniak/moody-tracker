import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import getStyles from './getStyles';

interface Props {
  id: number;
  content: string;
  isSelected: boolean;
  accentColor: string;
  onPress: (id: number) => any;
  testID?: string;
}

const FeelingButton: FC<Props> = ({
  id,
  content,
  isSelected,
  accentColor,
  onPress,
  testID,
}) => {
  const styles = getStyles({ isSelected, accentColor });

  const handlePress = () => {
    onPress(id);
  };

  return (
    <TouchableOpacity onPress={handlePress} testID={testID}>
      <View style={styles.container}>
        <Text style={styles.text}>{content}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FeelingButton;
