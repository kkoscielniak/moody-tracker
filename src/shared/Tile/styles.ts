import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';

export default StyleSheet.create({
  container: {
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: colors.fontBlue,
    height: 100,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  content: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 24,
    color: colors.fontBlue,
  },
});
