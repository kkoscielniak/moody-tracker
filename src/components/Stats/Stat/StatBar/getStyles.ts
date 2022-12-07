import { StyleSheet } from 'react-native';
import colors from '../../../../theme/colors';

interface Props {
  entriesLength: number;
  largestGroupLength: number;
}

export default ({ entriesLength, largestGroupLength }: Props) => {
  const widthPercentage = (entriesLength / largestGroupLength) * 100;

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
      alignContent: 'center',
    },
    bar: {
      width: `${widthPercentage}%`,
      overflow: 'hidden',
      height: 16,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 5,
      marginBottom: 13,
      display: 'flex',
      flexDirection: 'row',
    },
    box: {
      width: 48,
      height: 30,
      borderWidth: 1.5,
      borderColor: colors.fontBlue,
      borderRadius: 13,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      backgroundColor: colors.white,
      top: -6,
      left: -48,
    },
    boxText: {
      fontFamily: 'Montserrat-SemiBold',
      fontSize: 15,
      lineHeight: 18,
      color: colors.fontBlue,
    },
    spacer: {
      width: 45,
    },
  });
};
