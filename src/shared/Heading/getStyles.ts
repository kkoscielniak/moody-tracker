import { StyleSheet } from 'react-native';

interface Props {
  isTop?: boolean;
}

export default ({ isTop }: Props) =>
  StyleSheet.create({
    text: {
      fontFamily: 'Montserrat-Medium',
      textAlign: 'center',
      marginTop: isTop ? 10 : 30,
      marginBottom: 20,
    },
  });
