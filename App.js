import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './globalStyles';
import ProfileNavigator from './components/Profile/profile';
import MyOwn from './components/my-own/my-own';

const FeedScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Feed</Text>
  </View>
);

const Tab = createBottomTabNavigator();

export const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={FeedScreen} />
    <Tab.Screen name="Profile" component={ProfileNavigator} />
    <Tab.Screen name="MyOwn" component={MyOwn} />
  </Tab.Navigator>
);

const App = () => (
  <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
);

export default App;