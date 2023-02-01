// import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View , StatusBar} from 'react-native';
import CreateBill from './Screens/CreateBill';
import HomeScreens from './Screens/HomeScreens';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 

const Stack = createNativeStackNavigator(); //for navigation

export default function App() {
  return (
    <View style={styles.container}>
       <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreens} options={{ headerShown: false }} />
        <Stack.Screen name="CreateBill" component={CreateBill} />
      </Stack.Navigator>
    </NavigationContainer>
  
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
