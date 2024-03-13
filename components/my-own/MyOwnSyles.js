

import { StyleSheet } from "react-native";

const MyOwnSyles = StyleSheet.create({
  storiesContainer : {
    // flex: 1,
    height: 100,
    backgroundColor: 'white'
  },

  stories: { 
    flex: 1,
    height: 80,
    width: 80,
    borderRadius: 100,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },

  feed:{
    height: 500
  }
});

export default MyOwnSyles
