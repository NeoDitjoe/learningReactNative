import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './globalStyles';
import ProfileNavigator from './components/Profile/profile';
import MyOwn from './components/my-own/my-own';
import { createStackNavigator } from '@react-navigation/stack';

const FeedScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Feed</Text>
  </View>
);

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()

export const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={FeedScreen} />
    <Tab.Screen name="Profile" component={ProfileNavigator} />
    <Tab.Screen name="MyOwn" component={MyOwn} />
  </Tab.Navigator>
);

export const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Profile" component={ProfileNavigator} />
    <Stack.Screen name="Feed" component={FeedScreen} />
    <Stack.Screen name="MyOwn" component={MyOwn} />
  </Stack.Navigator>
);

const App = () => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);

export default App;