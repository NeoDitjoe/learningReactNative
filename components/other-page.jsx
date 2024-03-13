// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import {
//   ScrollView, StyleSheet, Text, View,
//   Dimensions,
// } from 'react-native';

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

// export default function OtherPage() {
//   return (
//     <View>
//       <View style={styles.nav}>
//         <Text>This is a nav</Text>
//       </View>
//       <ScrollView horizontal={true}>
//         <View style={[ styles.views, { backgroundColor: 'green'}]}></View>
//         <View style={[ styles.views, { backgroundColor: 'red'}]}></View>
//         <View style={[ styles.views, { backgroundColor: 'purple'}]}></View>
//         <View style={[ styles.views, { backgroundColor: 'blue'}]}></View>
//         <View style={[ styles.views, { backgroundColor: 'brown'}]}></View>
//       </ScrollView>

//       <View style={[ styles.views, { backgroundColor: 'red'}]}>
//         <Text>Other content</Text>
//       </View>
//       <View style={[ styles.views, { backgroundColor: 'red'}]}>
//         <Text>Other content</Text>
//       </View>
//       <View style={[ styles.views, { backgroundColor: 'red'}]}>
//         <Text>Other content</Text>
//       </View>
//       <View style={[ styles.views, { backgroundColor: 'red'}]}>
//         <Text>Other content</Text>
//       </View>
//       <View style={[ styles.views, { backgroundColor: 'red'}]}>
//         <Text>Other content</Text>
//       </View>
//       <View style={[ styles.views, { backgroundColor: 'red'}]}>
//         <Text>Other content</Text>
//       </View>
//       <View style={[ styles.views, { backgroundColor: 'red'}]}>
//         <Text>Other content</Text>
//       </View>
//       <View style={[ styles.views, { backgroundColor: 'red'}]}>
//         <Text>Other content</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'green',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   nav: {
//     backgroundColor: 'yellow',
//     padding: 20
//   },

//   views: {
//     width: 200,
//     height: 200,
//   }
// });

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native';

// Add the new stack navigator above this line
const Stack = createStackNavigator()

const OverviewScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.layout}>
      <Text style={styles.title}>OverviewScreen</Text>

      <Button title='My-Own' onPress={() => navigation.navigate('MyOwn')} />
    </View>
  )
};

const ProfileNavigator = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name='Overview' component={OverviewScreen} />
    </Stack.Navigator>
  )
};

const MyOtherOwn = () => {

  return (
    <View style={styles.layout}>
      <Text style={styles.title}>My Other Own</Text>
    </View>
  )
};

const MyOwn = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name='MyOwn' component={MyOtherOwn} />
    </Stack.Navigator>
  )
};

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

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
});
