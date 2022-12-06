import MoodEntry, { Feeling } from '../types/MoodEntry';

type Acc = {
  meh?: MoodEntry[];
  content?: MoodEntry[];
  happy?: MoodEntry[];
  frustrated?: MoodEntry[];
};

export default (entries: MoodEntry[]) => {
  return entries.reduce((acc: Acc, entry) => {
    const { feelings } = entry;

    feelings.forEach((feeling: Feeling) => {
      if (!acc[feeling]) {
        acc[feeling] = [];
      }

      acc[feeling]!.push(entry);
    });
    return acc;
  }, {});
};
