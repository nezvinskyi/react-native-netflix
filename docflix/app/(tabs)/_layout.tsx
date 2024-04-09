import React from 'react';
import { StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = 'dark';
console.log(colorScheme);
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'red',
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: 'black', height: 70, borderRadius: 35 },
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? 'dark'].background, 
        },
        headerTintColor: Colors[colorScheme ?? 'dark'].tint,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name='home' color={color} />,
          headerRight: () => (
            <Link href='/modal' asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name='info-circle'
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{
                      marginRight: 15,
                      opacity: pressed ? 0.5 : 1,
                    }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <TabBarIcon name='search' color={color} />,
        }}
      />
      <Tabs.Screen
        name='add'
        options={{
          title: 'Add',
          tabBarIcon: ({ color }) => <TabBarIcon name='plus' color={color} />,
        }}
      />
      <Tabs.Screen
        name='favourites'
        options={{
          title: 'Favourites',
          tabBarIcon: ({ color }) => <TabBarIcon name='heart' color={color} />,
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name='user' color={color} />,
        }}
      />
    </Tabs>
  );
}
