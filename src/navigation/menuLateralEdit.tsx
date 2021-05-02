import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../screens/settingsScreen';
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {colores, styles} from '../themes/AppTheme';
import {createStackNavigator} from '@react-navigation/stack';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const settingStackScreen_ = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        // options={{title: 'Página 1'}}
        name="SettingsScreen"
        component={SettingsScreen}
      />
    </Stack.Navigator>
  );
};

export const MenuLateralEdit = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerType={width >= 768 ? 'permanent' : 'front'}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Drawer.Screen name="SettingsScreen" component={settingStackScreen_} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({
  navigation,
}: DrawerContentComponentProps<DrawerContentOptions>) => {
  return (
    <DrawerContentScrollView>
      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
          }}
        />
        <Text>Felix Pretell2</Text>
      </View>

      {/* Opciones de menú */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuBoton}
          onPress={() => navigation.navigate('Tabs')}>
          <Text style={styles.menuTexto}><Icon name='compass-outline' size={20} color={styles.menuTexto} /> Navegación</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuBoton}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Text style={styles.menuTexto}><Icon name='settings-outline' size={20} color={styles.menuTexto} /> Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
    // <Text>hola 12</Text>
  );
};
