import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../themes/AppTheme';

interface Props extends StackScreenProps<any, any>{};

export const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>
      <Button
        title="Ir a Página 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />
    </View>
  );
};
