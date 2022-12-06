export type Feeling = 'meh' | 'content' | 'happy' | 'frustrated';

type MoodEntry = {
  id: number;
  feeling: Feeling[];
  value: number;
};

export default MoodEntry;
