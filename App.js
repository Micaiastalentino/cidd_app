import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar, TouchableOpacity, StyleSheet, View } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { useFonts } from "expo-font";
import { Image } from "expo-image";
import HOME from "./screens/HOME";
import CAMERA from "./screens/CAMERA";
import TIPOCLASS from "./screens/TIPOSCLASS";
import HISTORICO_CLASS from "./screens/HISTORICO_CLASS";
import DIAGSAUDAVEL_TST from "./screens/DIAGSAUDAVEL_TST";
import CAPTURA from "./screens/CAPTURA";
import CONFIGURACOES from "./screens/CONFIGURACOES";
import PERFIL from "./screens/PERFIL";
import DET_CAPTURA from "./screens/DET_CAPTURA";
import ViewDicas from "./components/CustomModal/CustomModal";

const Stack = createNativeStackNavigator();

const App = ({navigation}) => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setHideSplashScreen(true);
    }, 2000); // Define o tempo da splash screen (4 segundos)

    return () => clearTimeout(timer);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  const getTitle = (valor) => {
    //TITULO DINÂMICO - TELA HISTORICO_CLASS
    switch (valor) {
        case 1:
        return "PODRIDÃO PARDA";
        case 2:
        return "VASSOURA-DE-BRUXA";
    }
  };

  return (
    <>
      <StatusBar
        backgroundColor="#6f4325" // Define a cor barra de status no Android;
        barStyle="default" // Define o estilo dos ícones da barra de status no Android;
      />
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen
              name="HOME"
              component={HOME}
              options={({ navigation }) => ({ //NAVIGATION COMO PARÂMETRO PARA ACESSAR FUN. NAVIGATE;
                headerShown: true,
                headerTitle: "CIDD",
                headerTitleAlign: "center",
                headerTintColor: "#FFFFFF",
                headerStyle: {
                  backgroundColor: "#6f4325",
                },
                headerRight: () => (
                  <TouchableOpacity onPress={() => navigation.navigate('CONFIGURACOES')}>
                    <Entypo name="menu" size={33} color="#FFFFFF" />
                  </TouchableOpacity>
                ),
                headerLeft: () => (
                  <Image
                    style={{
                      height: 26,
                      width: 26,
                    }}
                    contentFit="cover"
                    source={require("./assets/images/app.png")} 
                  />
                ),
              })}
            />
            <Stack.Screen
              name="ViewDicas"
              component={ViewDicas}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="CAPTURA"
              component={CAPTURA}
              options={{ 
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="DET_CAPTURA"
              component={DET_CAPTURA}
              options={{ 
                headerShown: true,
                headerTitle: "CAPTURA",
                headerTitleAlign: "center",
                headerTintColor: "white",
                headerStyle: {
                  backgroundColor: "#6f4330",
                },
              }}
            />
            <Stack.Screen
              name="TIPOCLASS"
              component={TIPOCLASS}
              options={{ 
                headerShown: true,
                headerTitle: "TIPOS DE CLASSIFICAÇÃO",
                headerTitleAlign: "center",
                headerTintColor: "white",
                headerStyle: {
                  backgroundColor: "#6f4330",
                },
              }}
            />
            <Stack.Screen
              name="HISTORICO_CLASS"
              component={HISTORICO_CLASS}
              options={({ route }) => ({
                headerShown: true,
                headerTitle: getTitle(route.params.valor), // FUNÇÃO CALCULA TITULO BASEADO NO VALOR DE ENTRADA;
                headerTitleAlign: "center",
                headerTintColor: "white",
                headerStyle: {
                  backgroundColor: "#6f4330",
                },
              })}
            />
            <Stack.Screen
              name="DIAGSAUDAVEL_TST"
              component={DIAGSAUDAVEL_TST}
              options={{ 
                headerShown: true,
                headerTitle: "DIAGNÓSTICO",
                headerTitleAlign: "center",
                headerTintColor: "white",
                headerStyle: {
                  backgroundColor: "#6f4330",
                },
              }}
            />
            <Stack.Screen
              name="CAMERA"
              component={CAMERA}
              options={{ 
                headerShown: true,
                headerTitle: "CÂMERA",
                headerTitleAlign: "center",
                headerTintColor: "white",
                headerStyle: {
                  backgroundColor: "#6f4330",
                },
              }}
            />
            <Stack.Screen
              name="PERFIL"
              component={PERFIL}
              options={{ 
                headerShown: true,
                headerTitle: "PERFIL",
                headerTitleAlign: "center",
                headerTintColor: "white",
                headerStyle: {
                  backgroundColor: "#6f4330",
                },
              }}
            />
            {/*
            <Stack.Screen
              name="LOGIN"
              component={LOGIN}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CADASTRESE"
              component={CADASTRESE}
              options={{ headerShown: false }}
            />*/}
            <Stack.Screen
              name="CONFIGURACOES"
              component={CONFIGURACOES}
              options={{ 
                headerShown: true,
                headerTitle: 'CONFIGURAÇÕES',
                headerTitleAlign: "center",
                headerTintColor: "white",
                headerStyle: {
                  backgroundColor: "#6f4330",
                },
              }}
            />
          </Stack.Navigator>
        ) : (
          <View style={styles.container}>
            <Image
              style={styles.image}
              source={require("./assets/images/splash-init.gif")}
              contentFit="contain"
            />
          </View>
        )}
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 500,
    height: 500,
  },
});

export default App;