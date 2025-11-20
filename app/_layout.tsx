import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import {router, Stack} from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import {Provider} from "react-redux";
import {store} from "@/store/store";
import {Button, TouchableOpacity, View, StyleSheet, Text} from "react-native";
import Header from "@/components/Layout/Header";
import Settings from "@/app/settings";

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
      <Provider store={store}>
          <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
              <View style={{ flex: 1 }}>
                  <Header appName={"MyTeam"}/>
                  <Stack screenOptions={{ headerShown: false }}>
                      <Stack.Screen name="settings" options={{ headerShown: false }} />
                      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                      <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
                  </Stack>

                  <StatusBar style="auto" />
              </View>
              <StatusBar style="auto" />
          </ThemeProvider>
      </Provider>

  );
}
