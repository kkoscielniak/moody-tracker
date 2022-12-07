import React, { useCallback, useEffect } from 'react';
import { Button, View } from 'react-native';
import Heading from '../../components/shared/Heading/Heading';
import Screen from '../../components/shared/Screen/Screen';
import MoodLevelButton from './components/MoodLevelButton/MoodLevelButton';
import useRadios from './hooks/useRadios';
import styles from './styles';
import useCheckboxes from './hooks/useCheckboxes';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '../../store/hooks';
import { addEntry } from '../../store/reducer';
import FeelingButton from './components/FeelingButton/FeelingButton';
import Container from '../../components/shared/Container/Container';

const EntryScreen = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const {
    radios: moodLevelButtons,
    selectedRadio: selectedMoodLevel,
    selectRadio: selectMoodLevel,
  } = useRadios([
    {
      value: 1,
    },
    {
      value: 2,
    },
    {
      value: 3,
    },
    {
      value: 4,
    },
    {
      value: 5,
    },
  ]);

  const {
    checkboxes: feelings,
    selectedCheckboxes: selectedFeelings,
    toggleCheckbox,
  } = useCheckboxes([
    {
      value: 'frustrated',
      content: 'Frustrated 😡',
    },
    {
      value: 'meh',
      content: 'Meh 😒',
    },
    {
      value: 'content',
      content: 'Content 😌',
    },
    {
      value: 'happy',
      content: 'Happy 😎',
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
      <Container>
        <Heading content="How would you rate your mood? 🤔" isTop />
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
      </Container>
      {selectedMoodLevel ? (
        <Container>
          <>
            <Heading content="How are you feeling? 😸" isTop />
            <View>
              {feelings.map(({ content, selected, id }) => {
                return (
                  <FeelingButton
                    key={id}
                    id={id}
                    content={content}
                    isSelected={selected}
                    accentColor={selectedMoodLevel?.color}
                    onPress={() => toggleCheckbox(id)}
                  />
                );
              })}
            </View>
          </>
        </Container>
      ) : null}
    </Screen>
  );
};

export default EntryScreen;
