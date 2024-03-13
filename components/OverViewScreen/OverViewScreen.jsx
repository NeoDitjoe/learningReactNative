import { useNavigation } from "@react-navigation/core";
import { Button, Text, View } from "react-native";
import styles from "../../globalStyles";

const OverViewScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.layout}  onPress={() => navigation.navigate('MyOwn')} >
      <Text style={styles.title} >OverviewScreen</Text>

      <Button title='My-Own' onPress={() => navigation.navigate('MyOwn')} />
    </View>
  )
};

export default OverViewScreen