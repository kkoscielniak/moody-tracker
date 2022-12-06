import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Heading from '../../components/shared/Heading/Heading';
import Screen from '../../components/shared/Screen/Screen';
import MoodLevelButton from '../../components/MoodLevelButton/MoodLevelButton';
import useRadioButtons from './hooks/useRadioButtons';
import colors from '../../theme/colors';
import styles from './styles';
import useCheckboxButtons from './hooks/useCheckboxButtons';

const EntryScreen = () => {
  const {
    buttons: moodLevelButtons,
    selectedButtonId: selectedMoodLevelId,
    selectButton: selectMoodLevel,
  } = useRadioButtons([
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

  const { selectedButtons: feelingButtons, toggleButton } = useCheckboxButtons([
    {
      id: 0,
      value: 'frustrated',
    },
    {
      id: 1,
      value: 'meh',
    },
    {
      id: 2,
      value: 'content',
    },
    {
      id: 3,
      value: 'happy',
    },
  ]);

  return (
    <Screen>
      <Heading content="How would you rate your mood?" isTop />
      <View style={styles.moodLevelButtons}>
        {moodLevelButtons.map(({ id, value, color }) => (
          <MoodLevelButton
            key={id}
            id={id}
            value={value}
            isSelected={selectedMoodLevelId === id}
            onPress={selectMoodLevel}
            color={color}
          />
        ))}
      </View>
      <Heading content="How are you feeling?" />
      <View>
        {feelingButtons.map(({ value, selected, id }) => {
          return (
            <TouchableOpacity key={id} onPress={() => toggleButton(id)}>
              <Text>
                {value} {selected ? 'YES' : 'NO'}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </Screen>
  );
};

export default EntryScreen;
