/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/core';
import Icon from 'react-native-vector-icons/Ionicons';
import React, {useEffect} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {colores, styles} from '../themes/AppTheme';
import { blue100 } from 'react-native-paper/lib/typescript/styles/colors';

export const Pagina2Screen = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'Back',
      headerBackTitle: 'Atras',
    });
  }, [navigator]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina2Screen</Text>
      <Button
        title="Ir a Página 3"
        onPress={() => navigator.navigate('Pagina3Screen')}
      />

      <Text
        style={{
          marginVertical: 20,
          fontSize: 20,
        }}>
        Navegar con argumentos
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 20,
        }}>
        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: 'blue',
          }}
          onPress={() =>
            navigator.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Felix',
              apellido: 'Pretell',
            })
          }>
          <Text style={styles.botonGrandeTexto}><Icon name="man-outline" size={30} color={'white'} /></Text>
          <Text style={styles.botonGrandeTexto}>Felix</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: 'red',
          }}
          onPress={() =>
            navigator.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Britney',
              apellido: 'Spears',
            })
          }>
            <Text style={styles.botonGrandeTexto}><Icon name="woman-outline" size={30} color={'white'} /></Text>
            <Text style={styles.botonGrandeTexto}>Britney</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
