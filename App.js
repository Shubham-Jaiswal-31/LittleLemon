import 'react-native-gesture-handler';
import 'react-native-reanimated'
import { View, StyleSheet } from "react-native";
import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import MenuItems from "./components/MenuItems";
import WelcomeScreen from "./WelcomeScreen";
import LoginScreen from './LoginScreen';

const Drawer = createDrawerNavigator();

function App() {
	return (
		<>
			<NavigationContainer>
				<View style={styles.container}>
					<LittleLemonHeader />
					<Drawer.Navigator initialRouteName="Login">
						<Drawer.Screen name="Welcome" options={{ title: 'Home', headerTitleAlign: 'center' }} component={WelcomeScreen} />
						<Drawer.Screen name="Login" options={{ title: 'Login', headerTitleAlign: 'center' }} component={LoginScreen} />
					</Drawer.Navigator>
				</View>
				<View style={styles.footerContainer}>
					<LittleLemonFooter />
				</View>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#333333",
	},
	footerContainer: {
		backgroundColor: "#333333",
	},
});

export default App;