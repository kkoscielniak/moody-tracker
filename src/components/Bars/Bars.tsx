import React, { FC } from 'react';
import MoodEntry from '../../types/MoodEntry';
import groupEntriesByFeelings from '../../utils/groupEntriesByFeelings';
import mapMoodEntriesToMoodChartData from '../../utils/mapMoodEntriesToMoodChartData';
import Bar from '../Bar/Bar';
import Container from '../shared/Container/Container';
import Heading from '../shared/Heading/Heading';

interface Props {
  entries: MoodEntry[];
}

const Bars: FC<Props> = ({ entries }) => {
  const moodChartData = mapMoodEntriesToMoodChartData(entries);
  console.log({ moodChartData });

  return (
    <Container>
      <Heading content="Your Stats 📊" isTop />
    </Container>
  );
};

export default Bars;
