import React from 'react';
import { View } from 'react-native';
import Heading from '../../components/shared/Heading/Heading';
import Screen from '../../components/shared/Screen/Screen';
import MoodLevelButton from '../../components/MoodLevelButton/MoodLevelButton';
import useRadioButtons from './hooks/useRadioButton';
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
      <Heading content="How would you rate your mood?" isTop />
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
      <Heading content="How are you feeling?" />
    </Screen>
  );
};

export default EntryScreen;
