import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigator} from './src/navigation/StackNavigator';
import {MenuLateralEdit} from './src/navigation/menuLateralEdit';
import { Tabs } from './src/navigation/Tabs';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <MenuLateralEdit />
      {/* <Tabs /> */}
    </NavigationContainer>
  );
};
