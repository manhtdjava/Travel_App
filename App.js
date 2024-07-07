import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Splashscreen from "expo-splash-screen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Onboarding, Search, CountryDetail, Recommended, PlaceDetail,
  Hoteldetails, HotelLists, HotelSearch, SelectRoom,
  Settings,
  SelectedRoom,
  Successful,
  Failed
} from './screens';
import BottomTabNavigation from './navigation/BottomTabNavigation';

const Stack = createNativeStackNavigator()
export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require('./assets/fonts/regular.otf'),
    medium: require('./assets/fonts/medium.otf'),
    bold: require('./assets/fonts/bold.otf'),
    light: require('./assets/fonts/light.otf'),
    xtrabold: require('./assets/fonts/xtrabold.otf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await Splashscreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Onboarding' component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name='Bottom' component={BottomTabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name='Search' component={Search} options={{ headerShown: false }} />
        <Stack.Screen name='CountryDetil' component={CountryDetail} options={{ headerShown: false }} />
        <Stack.Screen name='Recommended' component={Recommended} options={{ headerShown: false }} />
        <Stack.Screen name='PlaceDetail' component={PlaceDetail} options={{ headerShown: false }} />
        <Stack.Screen name='Hoteldetails' component={Hoteldetails} options={{ headerShown: false }} />
        <Stack.Screen name='HotelList' component={HotelLists} options={{ headerShown: false }} />
        <Stack.Screen name='HotelSearch' component={HotelSearch} options={{ headerShown: false }} />
        <Stack.Screen name='SelectRoom' component={SelectRoom} options={{ headerShown: false }} />
        <Stack.Screen name='Settings' component={Settings} options={{ headerShown: false }} />
        <Stack.Screen name='Successful' component={Successful} options={{ headerShown: false }} />
        <Stack.Screen name='Failed' component={Failed} options={{ headerShown: false }} />
        <Stack.Screen name='SelectedRoom' component={SelectedRoom} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


