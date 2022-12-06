import colors from '../theme/colors';

const colorMap: string[] = [
  colors.moodAngryColor,
  colors.moodSadColor,
  colors.moodNeutralColor,
  colors.moodContentColor,
  colors.moodHappyColor,
];

export default (moodLevel: number): string => {
  return colorMap[moodLevel - 1];
};
