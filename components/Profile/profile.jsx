import { createStackNavigator } from "@react-navigation/stack"
import OverViewScreen from "../OverViewScreen/OverViewScreen"

const Stack = createStackNavigator()

const ProfileNavigator = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name='Overview' component={OverViewScreen} />
    </Stack.Navigator>
  )
};

export default ProfileNavigator