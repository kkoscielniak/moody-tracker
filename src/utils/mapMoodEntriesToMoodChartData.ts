import MoodChartData, {
  MoodEntryGroup,
  MoodEntryGroupByKey as MoodEntriesByFeelings,
} from '../types/MoodChartData';
import MoodEntry, { Feeling } from '../types/MoodEntry';

const groupEntriesByFeelings = (entries: MoodEntry[]): MoodEntriesByFeelings =>
  entries.reduce((acc: MoodEntriesByFeelings, entry) => {
    const { feelings } = entry;

    feelings.forEach((feeling: Feeling) => {
      if (!acc[feeling]) {
        acc[feeling] = [];
      }

      acc[feeling]!.push(entry);
    });
    return acc;
  }, {});

const getLargestGroupLength = (moodEntryGroups: MoodEntryGroup[]): number =>
  Math.max(...moodEntryGroups.map(group => group.entries!.length));

const mapEntriesByFeelingsToMoodEntryGroup = (
  entriesByFeelings: MoodEntriesByFeelings,
): MoodEntryGroup[] => {
  const entriesByFeelingsKeys = Object.keys(entriesByFeelings);

  return entriesByFeelingsKeys.map(key => ({
    feeling: key,
    entries: entriesByFeelings[key as keyof MoodEntriesByFeelings],
  }));
};

export default (moodEntries: MoodEntry[]): MoodChartData => {
  const entriesByFeelings = groupEntriesByFeelings(moodEntries);

  const moodEntryGroups: MoodEntryGroup[] =
    mapEntriesByFeelingsToMoodEntryGroup(entriesByFeelings);

  const sortedMoodEntryGroups = moodEntryGroups.sort(
    (a: MoodEntryGroup, b: MoodEntryGroup) =>
      b.entries!.length - a.entries!.length,
  );

  return {
    moodEntryGroups: sortedMoodEntryGroups,
    largestGroupLength: getLargestGroupLength(sortedMoodEntryGroups),
  };
};
