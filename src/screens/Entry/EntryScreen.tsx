import React, { useCallback, useEffect } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import Heading from '../../components/shared/Heading/Heading';
import Screen from '../../components/shared/Screen/Screen';
import MoodLevelButton from '../../components/MoodLevelButton/MoodLevelButton';
import useRadios from './hooks/useRadios';
import colors from '../../theme/colors';
import styles from './styles';
import useCheckboxes from './hooks/useCheckboxes';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '../../store/hooks';
import { addEntry } from '../../store/reducer';

const EntryScreen = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const {
    radios: moodLevelButtons,
    selectedRadio: selectedMoodLevel,
    selectRadio: selectMoodLevel,
  } = useRadios([
    {
      content: '😡 1',
      value: 1,
      color: colors.moodAngryColor,
    },
    {
      content: '😞 2',
      value: 2,
      color: colors.moodSadColor,
    },
    {
      content: '😐 3',
      value: 3,
      color: colors.moodNeutralColor,
    },
    {
      content: '🙂 4',
      value: 4,
      color: colors.moodContentColor,
    },
    {
      content: '😁 5',
      value: 5,
      color: colors.moodHappyColor,
    },
  ]);

  const {
    checkboxes: feelings,
    selectedCheckboxes: selectedFeelings,
    toggleCheckbox,
  } = useCheckboxes([
    {
      value: 'frustrated',
    },
    {
      value: 'meh',
    },
    {
      value: 'content',
    },
    {
      value: 'happy',
    },
  ]);

  const handleAddButton = useCallback(() => {
    dispatch(
      addEntry({
        feelings: selectedFeelings.map(feeling => feeling.value),
        moodLevel: selectedMoodLevel!.value,
      }),
    );

    navigation.goBack();
  }, [selectedFeelings, dispatch, navigation, selectedMoodLevel]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={handleAddButton}
          title="Add"
          disabled={!selectedFeelings?.length || !selectedMoodLevel}
        />
      ),
    });
  }, [navigation, handleAddButton, selectedMoodLevel, selectedFeelings]);

  return (
    <Screen>
      <Heading content="How would you rate your mood?" isTop />
      <View style={styles.moodLevelButtons}>
        {moodLevelButtons.map(({ id, value, color }) => (
          <MoodLevelButton
            key={id}
            id={id}
            value={value}
            isSelected={selectedMoodLevel?.id === id}
            onPress={selectMoodLevel}
            color={color}
          />
        ))}
      </View>
      <Heading content="How are you feeling?" />
      <View>
        {feelings.map(({ value, selected, id }) => {
          return (
            <TouchableOpacity key={id} onPress={() => toggleCheckbox(id)}>
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
