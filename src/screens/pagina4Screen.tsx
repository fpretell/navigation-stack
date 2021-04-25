import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {Button, Text, View} from 'react-native';
import {styles} from '../themes/AppTheme';

interface Props extends StackScreenProps<any, any> {}

export const Pagina4Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina4Screen</Text>
      <Button title="Regresar" onPress={() => navigation.pop()} />
      <Button title="Ir al Home" onPress={() => navigation.popToTop()} />
    </View>
  );
};
