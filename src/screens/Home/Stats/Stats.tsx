import React, { FC } from 'react';
import MoodEntry from '../../../types/MoodEntry';
import mapMoodEntriesToMoodChartData from '../../../utils/mapMoodEntriesToMoodChartData';
import Stat from './Stat/Stat';
import Container from '../../../shared/Container/Container';
import Heading from '../../../shared/Heading/Heading';

interface Props {
  entries: MoodEntry[];
}

const Stats: FC<Props> = ({ entries }) => {
  const { moodEntryGroups, largestGroupLength } =
    mapMoodEntriesToMoodChartData(entries);

  return (
    <Container>
      <Heading content="Your Stats 📊" isTop />

      {moodEntryGroups.map((moodEntryGroup, index) => (
        <Stat
          key={index}
          moodEntryGroup={moodEntryGroup}
          largestGroupLength={largestGroupLength}
        />
      ))}
    </Container>
  );
};

export default Stats;
