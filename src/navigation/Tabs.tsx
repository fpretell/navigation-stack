import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {Tab1Screen} from '../screens/Tab1Screen';
import {Tab2Screen} from '../screens/Tab2Screen';
import {Tab3Screen} from '../screens/Tab3Screen';
import {StackNavigator} from './StackNavigator';
import {colores} from '../themes/AppTheme';
import {Platform, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ChatScreen} from '../screens/ChatScreen';
import {AlbumsScreen} from '../screens/AlbumsScreen';
import {ContactsScreen} from '../screens/ContactsScreen';

const BottomTabIOS = createBottomTabNavigator();
const TopTabMaterialAndroid = createMaterialTopTabNavigator();
const BottomTabMaterialAndroid = createMaterialBottomTabNavigator();

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const TopTabsAndroid = () => {
  const {top} = useSafeAreaInsets();

  return (
    <TopTabMaterialAndroid.Navigator
      style={{
        padding: top,
      }}
      sceneContainerStyle={{backgroundColor: 'white'}}
      tabBarOptions={{
        pressColor: colores.primary,
        showIcon: true,
        indicatorStyle: {
          backgroundColor: colores.primary,
        },
        style: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Chat':
              iconName = 'airplane-outline';
              break;
            case 'Contacts':
              iconName = 'podium-outline';
              break;
            case 'Albums':
              iconName = 'heart-outline';
              break;

            default:
              break;
          }
          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      <TopTabMaterialAndroid.Screen
        name="Chat"
        // options={{title: 'Tab1a'}}
        component={ChatScreen}
      />
      <TopTabMaterialAndroid.Screen
        name="Contacts"
        // options={{title: 'Tab2'}}
        component={ContactsScreen}
      />
      <TopTabMaterialAndroid.Screen
        name="Albums"
        // options={{title: 'Tab3'}}
        component={AlbumsScreen}
      />
    </TopTabMaterialAndroid.Navigator>
  );
};

const TabsAndroid = () => {
  return (
    <BottomTabMaterialAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colores.primary,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused, size}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'color-filter-outline';
              break;
            case 'TopTabsAndroid':
              iconName = 'nutrition-outline';
              break;
            case 'Tab3Screen':
              iconName = 'navigate-outline';
              break;
            default:
              break;
          }
          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      <BottomTabMaterialAndroid.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1a',
        }}
        component={Tab1Screen}
      />
      <BottomTabMaterialAndroid.Screen
        name="TopTabsAndroid"
        options={{title: 'Tab2'}}
        component={TopTabsAndroid}
      />
      <BottomTabMaterialAndroid.Screen
        name="Tab3Screen"
        options={{title: 'Tab3'}}
        component={StackNavigator}
      />
    </BottomTabMaterialAndroid.Navigator>
  );
};

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}
      tabBarOptions={{
        activeTintColor: colores.primary,
        style: {
          //   elevation:
          borderTopColor: colores.primary,
          borderTopWidth: 0,
        },
        labelStyle: {
          fontSize: 15,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused, size}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'color-filter-outline';
              break;
            case 'Tab2Screen':
              iconName = 'nutrition-outline';
              break;
            case 'Tab3Screen':
              iconName = 'navigate-outline';
              break;
            default:
              break;
          }
          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      <BottomTabIOS.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1a',
          //   tabBarIcon: (props) => <Text style={{color: props.color}}>T1</Text>,
        }}
        component={Tab1Screen}
      />
      <BottomTabIOS.Screen
        name="Tab2Screen"
        options={{title: 'Tab2'}}
        component={Tab2Screen}
      />
      <BottomTabIOS.Screen
        name="Tab3Screen"
        options={{title: 'Tab3'}}
        component={StackNavigator}
      />
    </BottomTabIOS.Navigator>
  );
};
