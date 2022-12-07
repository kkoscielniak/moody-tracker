import { StyleSheet } from 'react-native';

interface Props {
  entriesLength: number;
  largestGroupLength: number;
}

export default ({ entriesLength, largestGroupLength }: Props) => {
  const widthPercentage = (entriesLength / largestGroupLength) * 100;

  return StyleSheet.create({
    bar: {
      overflow: 'hidden',
      width: `${widthPercentage}%`,
      height: 16,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 5,
      marginBottom: 13,
      display: 'flex',
      flexDirection: 'row',
    },
  });
};
