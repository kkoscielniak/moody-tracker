import { StyleSheet } from 'react-native';

interface Props {
  isSelected: boolean;
  color: string;
}

export default ({ isSelected, color }: Props) =>
  StyleSheet.create({
    container: {
      backgroundColor: isSelected ? color : 'transparent',
      borderColor: color,
      borderWidth: 5,
      borderRadius: 5,
      height: 50,
      width: 50,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontFamily: 'Montserrat-SemiBold',
      fontSize: 18,
      // color: isSelected ? '#000000' : color,
    },
  });
