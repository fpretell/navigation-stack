import {DrawerScreenProps} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
// import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {colores, styles} from '../themes/AppTheme';

interface Props extends DrawerScreenProps<any, any> {}
// interface Props extends StackScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{
            marginLeft: 10,
          }}
          onPress={() => {
            navigation.toggleDrawer();
          }}>
          <Icon name="menu-outline" size={40} color={colores.primary} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen--</Text>
      <Button
        title="Ir a Página 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />
    </View>
  );
};
