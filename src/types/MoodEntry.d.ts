export type Feeling = 'meh' | 'content' | 'happy' | 'frustrated';

type MoodEntry = {
  feelings: Feeling[];
  moodLevel: number;
};

export default MoodEntry;
