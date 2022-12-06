import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 4,
    padding: 10,
  },
  header: {
    marginBottom: 10,
    fontFamily: 'Montserrat-SemiBold',
  },
});
