import { StyleSheet, Text, View, ViewProps } from 'react-native';
import React, { Children, FC, PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

type TAppScreen = ViewProps & PropsWithChildren;

export const AppScreenTestId = 'screens.AppScreen';
function AppScreen({ children, ...props }: TAppScreen) {
  return (
    <SafeAreaView testID={AppScreenTestId} {...props} style={{ flex: 1 }}>
      {children}
    </SafeAreaView>
  );
}
export default AppScreen;

const styles = StyleSheet.create({});
