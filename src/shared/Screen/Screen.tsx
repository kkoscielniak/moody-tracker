import React, { FC, PropsWithChildren } from 'react';
import { ScrollView, View } from 'react-native';
import styles from './styles';

const Screen: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.screen}>{children}</View>
    </ScrollView>
  );
};

export default Screen;
