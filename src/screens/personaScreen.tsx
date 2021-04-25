import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {RootStackParams} from '../navigation/StackNavigator';
import {styles} from '../themes/AppTheme';

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}
// interface RouterParams {
//   id: number;
//   nombre: string;
//   apellido: string;
// }

export const PersonaScreen = ({route, navigation}: Props) => {
  const params = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: params.nombre + ' ' + params.apellido,
      headerBackTitle: params.nombre,
    });
  }, []);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 4)}</Text>
      {/* <Text>Persona</Text>
      <Text>Nombre:{props.route.params.nombre}</Text>
      <Text>Apellid: {props.route.params.apellido}</Text> */}
    </View>
  );
};

// const styles = StyleSheet.create({});
