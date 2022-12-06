import { StyleSheet } from 'react-native';

interface Props {
  isTop?: boolean;
}

export default ({ isTop }: Props) =>
  StyleSheet.create({
    text: {
      fontFamily: 'Montserrat-Regular',
      textAlign: 'center',
      marginTop: isTop ? 10 : 30,
      marginBottom: 20,
    },
  });
