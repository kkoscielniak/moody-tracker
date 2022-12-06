export type Feeling = 'meh' | 'content' | 'happy' | 'frustrated';

type MoodEntry = {
  // id: number;
  feelings: Feeling[];
  moodLevel: number;
};

export default MoodEntry;
