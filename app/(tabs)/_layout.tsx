import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import {Ionicons} from "@expo/vector-icons";


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
      <Tabs
          screenOptions={{
              tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
              headerShown: false,
              tabBarStyle: {
                  height: 70,
                  paddingTop: 10,
              },
              tabBarButton: (props) => <HapticTab {...props} />,
          }}>
          <Tabs.Screen
              name="index"
              options={{
                  title: 'Home',
                  tabBarIcon: ({ color }) => <Ionicons size={28} name="home" color={color} />,
              }}
          />
          <Tabs.Screen
              name="team"
              options={{
                  title: 'Team',
                  tabBarIcon: ({ focused }) =>
                      <Ionicons
                          size={28}
                          name={focused ? "people-circle" : "people-circle-outline"}
                          color={focused ? Colors[colorScheme ?? 'light'].tint : Colors[colorScheme ?? 'light'].tabIconDefault} />,
              }}
          />
          <Tabs.Screen
              name="games"
              options={{
                  title: 'Spielplan',
                  tabBarIcon: ({ focused }) =>
                      <Ionicons
                          size={28}
                          name={focused ? "calendar" : "calendar-outline"}
                          color={focused ? Colors[colorScheme ?? 'light'].tint : Colors[colorScheme ?? 'light'].tabIconDefault} />,
              }}
          />
          {/*<Tabs.Screen*/}
          {/*      name="settings"*/}
          {/*      options={{*/}
          {/*          title: 'Einstellungen',*/}
          {/*          tabBarIcon: ({ focused }) =>*/}
          {/*              <Ionicons*/}
          {/*                  size={28}*/}
          {/*                  name={focused ? "settings" : "settings-outline"}*/}
          {/*                  color={focused ? Colors[colorScheme ?? 'light'].tint : Colors[colorScheme ?? 'light'].tabIconDefault} />,*/}
          {/*      }}*/}
          {/*/>*/}

      </Tabs>

  );
}
