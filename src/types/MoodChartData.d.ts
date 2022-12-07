import MoodEntry from './MoodEntry';

export type MoodEntryGroupByKey = {
  meh?: MoodEntry[];
  frustrated?: MoodEntry[];
  content?: MoodEntry[];
  happy?: MoodEntry[];
};

export type MoodEntryGroup = {
  feeling: string;
  entries?: MoodEntry[];
};

type MoodChartData = {
  moodEntryGroups: MoodEntryGroup[];
  largestGroupLength: number;
};

export default MoodChartData;
