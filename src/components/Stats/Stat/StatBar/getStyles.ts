import { StyleSheet } from 'react-native';

interface Props {
  entriesLength: number;
  largestGroupLength: number;
}

export default ({ entriesLength, largestGroupLength }: Props) => {
  const widthPercentage = (entriesLength / largestGroupLength) * 100;

  return StyleSheet.create({
    bar: {
      backgroundColor: '#68D393',
      width: `${widthPercentage}%`,
      height: 16,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 5,
      marginBottom: 13,
    },
  });
};
