import React from 'react';
import { Text, View } from 'react-native';
import Screen from '../../components/shared/Screen/Screen';
import MoodLevelButton from '../../components/ToggleButton/ToggleButton';
import useRadioButtons from '../../components/ToggleButton/useRadioButton';
import colors from '../../theme/colors';
import styles from './styles';

const EntryScreen = () => {
  const { buttons, selectedButtonId, selectButton } = useRadioButtons([
    {
      id: 1,
      value: '😡 1',
      color: colors.moodAngryColor,
    },
    {
      id: 2,
      value: '😞 2',
      color: colors.moodSadColor,
    },
    {
      id: 3,
      value: '😐 3',
      color: colors.moodNeutralColor,
    },
    {
      id: 4,
      value: '🙂 4',
      color: colors.moodContentColor,
    },
    {
      id: 5,
      value: '😁 5',
      color: colors.moodHappyColor,
    },
  ]);

  return (
    <Screen>
      <Text style={styles.heading}>How would you rate your mood?</Text>
      <View style={styles.moodLevelButtons}>
        {buttons.map(({ id, value, color }) => (
          <MoodLevelButton
            key={id}
            id={id}
            value={value}
            isSelected={selectedButtonId === id}
            onPress={selectButton}
            color={color}
          />
        ))}
      </View>
      <Text style={styles.heading}>How are you feeling?</Text>
    </Screen>
  );
};

export default EntryScreen;
