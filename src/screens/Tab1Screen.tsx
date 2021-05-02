import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text, View} from 'react-native';
import {colores, styles} from '../themes/AppTheme';

export const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <Icon name="airplane-outline" size={80} color={colores.primary} />
        <Icon name="podium-outline" size={80} color={colores.primary} />
        <Icon name="navigate-outline" size={80} color={colores.primary} />
        <Icon name="heart-outline" size={80} color={colores.primary} />
        <Icon name="color-filter-outline" size={80} color={colores.primary} />
        <Icon name="nutrition-outline" size={80} color={colores.primary} />
      </Text>
    </View>
  );
};
