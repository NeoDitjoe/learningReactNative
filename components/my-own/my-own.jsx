import { createStackNavigator } from "@react-navigation/stack";
import { Button, Text, View } from "react-native";
import MyOwnSyles from "./MyOwnSyles";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

const Stack = createStackNavigator()

const stories = ['red', 'yellow', 'blue', 'brown', 'black', 'white', 'silver', 'gold']

const MyOtherOwn = () => {

  const navigation = useNavigation();

  return (
    <View>
      <ScrollView horizontal={true} style={MyOwnSyles.storiesContainer}>
        {
          stories.map((item) => (
            <View style={[MyOwnSyles.stories, { backgroundColor: item }]}  >
              <Text onPress={() => navigation.navigate('Overview')}></Text>
            </View>
          ))
        }
      </ScrollView>

      <ScrollView style={MyOwnSyles.feedContainer}>
        {
          stories.map((item) => (
            <View style={[MyOwnSyles.feed, { backgroundColor: item }]}  >
              <Text onPress={() => navigation.navigate('Overview')}></Text>
            </View>
          ))
        }
      </ScrollView>
    </View>
  )
};

const MyOwn = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name='Instagram' component={MyOtherOwn} />
    </Stack.Navigator>
  )
};

export default MyOwn
