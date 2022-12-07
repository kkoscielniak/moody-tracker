import { StyleSheet } from 'react-native';
import colors from '../../../theme/colors';

export default ({
  isSelected,
  accentColor,
}: {
  isSelected: boolean;
  accentColor: string;
}) =>
  StyleSheet.create({
    container: {
      backgroundColor: isSelected ? accentColor : colors.white,
      marginBottom: 10,
      padding: 10,
      borderRadius: 4,
      alignItems: 'center',
      borderWidth: 1.5,
      borderColor: colors.fontBlue,
    },
    text: {
      fontFamily: 'Montserrat-Medium',
      color: colors.fontBlue,
    },
  });
