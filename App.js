import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeBaseProvider, StatusBar, extendTheme } from "native-base";

import store from './app/store'
import { Provider } from 'react-redux'

import CustomTabBar from "./app/components/CustomTabBar";

import HomeView from "./app/views/HomeView";
import DocumentsView from "./app/views/DocumentsView";
import SustainabilityView from "./app/views/SustainabilityView";
import NotificationsView from "./app/views/NotificationsView";
import CompanyView from "./app/views/CompanyView";
import Synchronize from "./app/components/Synchronize";


import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';



const theme = extendTheme({
  fontConfig: {
    'SarayFont': {
      600: {
        normal: 'SarayFontBold'
      },
      700: {
        normal: 'SarayFontBold'
      },
      800: {
        normal: 'SarayFontBold'
      },
      900: {
        normal: 'SarayFontBold'
      },
    }
  },
  fonts: {
    heading: "SarayFont",
    body: "SarayFont",
    mono: "SarayFont",    
  },
});


const Tab = createBottomTabNavigator();
export default function App() {
  const [fontsLoaded] = useFonts({
    'SarayFont': require('./assets/fonts/SF-Pro-Rounded-Regular.otf'),
    'SarayFontBold': require('./assets/fonts/SF-Pro-Rounded-Bold.otf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }  

  return (
    <Provider store={store}>
      <Synchronize />
      <NativeBaseProvider theme={theme}>
        <StatusBar style="auto" hidden={true} />
        <NavigationContainer>
          <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />} screenOptions={{headerShown: false}}>
            <Tab.Screen name="Home" component={HomeView} options={{headerShown: false}} />
            <Tab.Screen name="Documents" component={DocumentsView} />
            <Tab.Screen name="Sustainability" component={SustainabilityView} />
            <Tab.Screen name="Company" component={CompanyView} />
            <Tab.Screen name="Notification" component={NotificationsView} />
          </Tab.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
