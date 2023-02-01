import { StyleSheet, Text, View  , Image , TouchableOpacity} from 'react-native'
import React from 'react' 

export default function HomeScreens({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/icon.png')}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CreateBill')}
      >
        <Text>Create Bill</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo : {
    width : 100,
    height:100,
    marginBottom  : 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius:4
  },
});
