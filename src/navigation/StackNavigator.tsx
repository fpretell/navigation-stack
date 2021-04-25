import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Pagina1Screen} from '../screens/pagina1Screen';
import {Pagina2Screen} from '../screens/pagina2Screen';
import {Pagina3Screen} from '../screens/pagina3Screen';
import {Pagina4Screen} from '../screens/pagina4Screen';
import {PersonaScreen} from '../screens/personaScreen';

export type RootStackParams = {
  Pagina1Screen: undefined;
  Pagina2Screen: undefined;
  Pagina3Screen: undefined;
  Pagina4Screen: undefined;
  PersonaScreen: {id: number; nombre: string; apellido: string};
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName="Pagina3Screen"
      screenOptions={{
        // headerShown: false,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        options={{title: 'Página 1'}}
        name="Pagina1Screen"
        component={Pagina1Screen}
      />
      <Stack.Screen
        options={{title: 'Página 2'}}
        name="Pagina2Screen"
        component={Pagina2Screen}
      />
      <Stack.Screen
        options={{title: 'Página 3'}}
        name="Pagina3Screen"
        component={Pagina3Screen}
      />
      <Stack.Screen
        options={{title: 'Página 4'}}
        name="Pagina4Screen"
        component={Pagina4Screen}
      />
      <Stack.Screen
        options={{title: 'Persona'}}
        name="PersonaScreen"
        component={PersonaScreen}
      />
    </Stack.Navigator>
  );
};
