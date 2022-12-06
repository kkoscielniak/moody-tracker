import React, { FC } from 'react';
import MoodEntry from '../../types/MoodEntry';
import groupEntriesByFeelings from '../../utils/groupEntriesByFeelings';
import Container from '../shared/Container/Container';
import Heading from '../shared/Heading/Heading';

interface Props {
  entries: MoodEntry[];
}

const Bars: FC<Props> = ({ entries }) => {
  // const arr = [
  //   groupBy(entries, entry => entry.feelings.includes('meh')).true,
  //   groupBy(entries, entry => entry.feelings.includes('frustrated')).true,
  //   groupBy(entries, entry => entry.feelings.includes('content')).true,
  //   groupBy(entries, entry => entry.feelings.includes('happy')).true,
  // ].sort((a, b) => b.length - a.length);

  console.log(groupEntriesByFeelings(entries));

  return (
    <Container>
      <Heading content="Your Stats 📊" isTop />
    </Container>
  );
};

export default Bars;
