import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import AppScreen, { AppScreenTestId } from './AppScreen';

it('renders correctly', () => {
  const test = renderer.create(<AppScreen />).getInstance();
  test?.findAllByProps({ testID: AppScreenTestId });
});
