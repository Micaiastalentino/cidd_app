import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { Image, Text, View } from 'react-native';

// Importe as telas para as quais você deseja navegar
import CAPTURA from "../screens/CAPTURA";
import PERFIL from "../screens/PERFIL";
import CONFIGURACOES from "../screens/CONFIGURACOES";
import HOME from "../screens/HOME";
import CAMERA from "../screens/CAMERA";

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => (
  <View style={{ flexDirection: 'row', backgroundColor: '#ffffff' }}>
    {state.routes.map((route, index) => {
      const { options } = descriptors[route.key];
      const label =
        options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
          ? options.title
          : route.name;

      const isFocused = state.index === index;

      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate(route.name);
        }
      };

const getIcon = (name) => {
  switch (name) {
    case 'Home':
      return 'home';
    case 'Configuracoes':
      return require("./assets/firsinfo1.png"); // Coloque o caminho correto para o ícone
    case 'Camera':
      return require("./assets/firscamera1.png");
    case 'Captura':
      return require("./assets/liclock.png");
    case 'Perfil':
      return require("./assets/liuser.png");
    default:
      return '';
  }
};

      return (
        <View
          key={index}
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          {typeof getIcon(label) === 'string' ? (
            <Feather name={getIcon(label)} size={24} color={isFocused ? '#007AFF' : '#888888'} />
          ) : (
            <Image source={getIcon(label)} style={{ width: 24, height: 24, tintColor: isFocused ? '#007AFF' : '#888888' }} />
          )}
          <Text style={{ color: isFocused ? '#007AFF' : '#888888', marginTop: 4 }}>
            {label}
          </Text>
        </View>
      );
    })}
  </View>
);

const MainTabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={HOME} />
      <Tab.Screen name="Configuracoes" component={CONFIGURACOES} />
      <Tab.Screen name="Camera" component={CAMERA} />
      <Tab.Screen name="Captura" component={CAPTURA} />
      <Tab.Screen name="Perfil" component={PERFIL} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;