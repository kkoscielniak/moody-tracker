import { StyleSheet } from 'react-native';
import colors from '../../../theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundGray,
    borderRadius: 5,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: colors.borderColor,
    height: 100,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusSign: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 24,
  },
});
