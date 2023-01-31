// import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View , StatusBar} from 'react-native';
import CreateBill from './Screens/CreateBill';
import HomeScreens from './Screens/HomeScreens';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreens />
      {/* <Image source={require('./assets/icon.png')} style={{ width: 100, height: 100 }} />
      <Button title='Abhishek' onPress={() => { alert("hi bro") }} />
      <TouchableOpacity onPress={() => { alert("hi bro") }} style={styles.button} >
        <Text>Create Bill</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    marginTop: StatusBar.currentHeight
    },
  button: {
    height: 40,
    backgroundColor: 'lightblue',
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 10,
    top: 10

  }
});
