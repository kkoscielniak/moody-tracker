import React, { FC, PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../../theme/colors';

const Container: FC<PropsWithChildren<{}>> = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },
});

export default Container;
