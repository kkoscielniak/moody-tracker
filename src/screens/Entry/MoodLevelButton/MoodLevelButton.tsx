import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

interface Props {
  id: number;
  value: number;
  color: string;
  isSelected: boolean;
  onPress: (id: number) => any;
}

const MoodLevelButton: FC<Props> = ({
  id,
  value,
  color,
  isSelected,
  onPress,
}) => {
  const style = styles({ isSelected, color });

  const handlePress = () => {
    onPress(id);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={style.container}>
        <Text style={style.text}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MoodLevelButton;
