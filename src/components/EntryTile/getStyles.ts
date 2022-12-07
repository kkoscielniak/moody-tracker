import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import mapMoodLevelToColor from '../../utils/mapMoodLevelToColor';

interface Props {
  moodLevel: number;
}

export default ({ moodLevel }: Props) => {
  const accentColor = mapMoodLevelToColor(moodLevel);

  return StyleSheet.create({
    container: {
      backgroundColor: accentColor || colors.backgroundGray,
    },
  });
};
